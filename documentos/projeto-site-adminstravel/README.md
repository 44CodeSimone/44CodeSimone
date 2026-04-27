# projeto-site-adminstravel

Base profissional inicial (monorepo) para evolução do sistema Garcia Lavacar.

## Status desta etapa

Etapa 1 concluída: setup estrutural e padronização de configuração.

### Escopo aplicado
- Estrutura de monorepo criada (`apps`, `packages`, `infra`, `docs`).
- Configuração base compartilhada para TypeScript, ESLint e Prettier.
- Arquivos estáticos legados preservados temporariamente para migração futura:
  - `index.html`
  - `src/content.js`
  - `src/app.js`
  - `src/styles.css`

## Estrutura

```txt
apps/
  web/
  admin/
  api/
packages/
  ui/
  types/
  config/
infra/
docs/
```

## Configuração base

- `tsconfig.base.json`: opções TypeScript compartilhadas.
- `eslint.config.mjs`: lint global do repositório.
- `.prettierrc`: padronização de formatação.
- `.env.example`: variáveis de ambiente de referência para próximas etapas.

## Observação

Esta etapa não inclui implementação de backend, banco de dados, autenticação ou funcionalidades de negócio.
