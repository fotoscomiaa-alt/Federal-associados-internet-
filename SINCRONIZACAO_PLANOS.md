# Sincronização automática dos planos

O arquivo `src/data/plans.json` é a fonte consumida pelos cards do site. O script `scripts/sync-plans.mjs` consulta `https://cadastro.federalassociadoscadastro.com/?indicador=159140`, baixa os chunks públicos usados pelo cadastro e extrai os oito planos de internet.

A sincronização é defensiva: exige que os oito planos esperados sejam encontrados, confirma operadora, franquia e indicação de ligação e altera somente o campo de preço. Se a estrutura da fonte mudar ou algum plano desaparecer, o script falha sem sobrescrever os dados atuais.

O workflow `.github/workflows/sync-plans.yml` pode executar a verificação a cada hora ou manualmente pela aba Actions do GitHub. Quando um preço mudar, ele atualiza `src/data/plans.json`, roda o build e registra um commit automático. O deploy do site deve estar conectado ao mesmo repositório para publicar a mudança.

## Ativação no GitHub

1. Subir o conteúdo do projeto para um repositório GitHub.
2. Conectar o deploy do site a esse repositório.
3. Habilitar GitHub Actions e permitir que o workflow tenha escrita no conteúdo do repositório.
4. Executar `npm run sync:plans` manualmente uma vez para conferir a fonte.

O valor atualmente identificado na fonte é **R$ 99,90 para o Vivo 100GB**. O site foi alinhado a esse valor.
