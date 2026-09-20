import { readFile, writeFile } from "node:fs/promises";

const SOURCE_URL = "https://cadastro.federalassociadoscadastro.com/?indicador=159140";
const ORIGIN = new URL(SOURCE_URL).origin;
const DATA_FILE = new URL("../src/data/plans.json", import.meta.url);

const expected = [
  ["vivo-60gb", "Vivo", "Vivo 60GB", "60GB", true],
  ["vivo-100gb", "Vivo", "Vivo 100GB", "100GB", true],
  ["vivo-300gb", "Vivo", "Vivo 300GB", "300GB", false],
  ["vivo-500gb", "Vivo", "Vivo 500GB", "500GB", false],
  ["claro-80gb", "Claro", "Claro 80GB", "80GB", true],
  ["claro-160gb", "Claro", "Claro 160GB", "160GB", true],
  ["tim-100gb", "Tim", "Tim 100GB", "100GB", true],
  ["tim-500gb", "Tim", "Tim 500GB", "500GB", false]
];

async function get(url) {
  const response = await fetch(url, { headers: { "user-agent": "FederalAssociadosPlansSync/1.0" } });
  if (!response.ok) throw new Error(`Fonte indisponível: HTTP ${response.status} em ${url}`);
  return response.text();
}

function extractPlans(source) {
  const pattern = /name:"([^"]+)",price:"([0-9.]+)",operator:"(Vivo|Claro|Tim)",data:"([^"]+)",hasCall:(!0|!1)/g;
  const found = new Map();
  for (const match of source.matchAll(pattern)) {
    const [, rawName, price, operator, data, callFlag] = match;
    const key = `${operator.toLowerCase()}-${data.toLowerCase()}`;
    found.set(key, { rawName, price, operator, data, hasCall: callFlag === "!0" });
  }
  return expected.map(([id, operator, name, data, hasCall]) => {
    const match = found.get(`${operator.toLowerCase()}-${data.toLowerCase()}`);
    if (!match || match.hasCall !== hasCall) return null;
    return { id, operator, name, data, call: hasCall ? "Com ligação" : "Sem ligação", hasCall, price: Number(match.price).toFixed(2) };
  }).filter(Boolean);
}

const html = await get(SOURCE_URL);
const scripts = [...html.matchAll(/(?:src|href)="([^"]+\.js[^"]*)"/g)].map(([, src]) => new URL(src, ORIGIN).href);
const chunks = await Promise.all([...new Set(scripts)].map(get));
const extracted = extractPlans(`${html}\n${chunks.join("\n")}`);

if (extracted.length !== expected.length) {
  throw new Error(`Validação interrompida: esperados ${expected.length} planos, encontrados ${extracted.length}. Nenhuma alteração foi feita.`);
}

const current = JSON.parse(await readFile(DATA_FILE, "utf8"));
const byId = new Map(extracted.map((plan) => [plan.id, plan]));
const next = current.map((plan) => ({ ...plan, price: byId.get(plan.id).price }));
const changed = JSON.stringify(current) !== JSON.stringify(next);

if (changed) {
  await writeFile(DATA_FILE, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`Planos atualizados a partir de ${SOURCE_URL}`);
} else {
  console.log("Nenhuma alteração de valor encontrada.");
}

console.table(next.map(({ operator, name, price }) => ({ operator, name, price: `R$ ${price.replace(".", ",")}` })));
