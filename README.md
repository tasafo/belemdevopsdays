# DevOpsDays Belém 2025

## Sobre o Projeto

Site oficial do evento DevOpsDays Belém 2025, construído com Next.js, React e Tailwind CSS.

## Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/) - Framework React com renderização estática
- [React 18](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis e sem estilos
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones

## Requisitos

- Node.js 20.x ou superior
- yarn

## Instalação

```bash
yarn install
```

## Desenvolvimento

```bash
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar o site em desenvolvimento.

## Build

```bash
yarn build
```

Este projeto utiliza o modo de exportação estática do Next.js (`output: 'export'`), gerando HTML estático para todas as páginas.

## Estrutura do Projeto

```
/src
  /app                    # Páginas da aplicação (Next.js App Router)
  /components             # Componentes React reutilizáveis
  /data                   # Dados estruturados (palestrantes, palestras, etc.)
  /lib                    # Utilitários e funções auxiliares
  /styles                 # Estilos globais
```

## Gerando Sitemap

Após o build, o sitemap é gerado automaticamente usando `next-sitemap`:

```bash
yarn sitemap
```

## Customização

O projeto utiliza Tailwind CSS para estilização, com um tema personalizado definido em `tailwind.config.ts`. A paleta de cores principal inclui:

- **Primária**: `#004a8f` (azul)
- **Secundária**: `#33C3F0` (ciano)