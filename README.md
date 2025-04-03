# BidWeb Desafio

Este projeto foi desenvolvido como parte de um desafio técnico, utilizando tecnologias modernas para criar uma aplicação web robusta e responsiva.

## 🚀 Tecnologias e Bibliotecas

### Core

- **React 18.3**: Framework JavaScript para construção de interfaces de usuário, oferecendo um sistema de componentes reutilizáveis e gerenciamento eficiente de estado.
- **TypeScript 5.7**: Superset tipado de JavaScript que adiciona tipagem estática, melhorando a manutenibilidade e reduzindo erros em tempo de desenvolvimento.
- **Vite 6.2**: Ferramenta de build moderna que oferece um ambiente de desenvolvimento extremamente rápido com hot module replacement.

### Estilização

- **Tailwind CSS 4.1**: Framework CSS utilitário que permite criar designs responsivos e personalizados sem sair do HTML, agilizando o desenvolvimento.
- **Radix UI**: Biblioteca de componentes primitivos acessíveis e altamente personalizáveis.
- **Lucide React 0.487**: Biblioteca de ícones moderna e leve, compatível com React.
- **tw-animate-css**: Biblioteca para animações CSS no Tailwind.

### Formulários e Validação

- **React Hook Form**: Biblioteca para gerenciamento de formulários com validação.
- **Zod**: Biblioteca para validação de esquemas TypeScript.
- **@hookform/resolvers**: Integração entre React Hook Form e Zod.

### Roteamento e SEO

- **React Router 7.4**: Biblioteca para gerenciamento de rotas em aplicações React.
- **React Helmet Async**: Gerenciamento de metadados e SEO.

### Desenvolvimento

- **ESLint 9.23**: Ferramenta de linting para identificar e corrigir problemas no código JavaScript/TypeScript.
- **Prettier 3.5**: Formatador de código que garante consistência no estilo do código.
- **Prettier Plugin Tailwind CSS**: Plugin que ordena automaticamente as classes do Tailwind CSS.

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/bidweb-desafio.git
cd bidweb-desafio
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse a aplicação em `http://localhost:5173`

## 🧪 Testes Rápidos

Para garantir que a aplicação está funcionando corretamente:

1. Verifique se o servidor de desenvolvimento está rodando:

```bash
npm run dev
```

2. Execute o linter para verificar a qualidade do código:

```bash
npm run lint
```

3. Construa o projeto para produção:

```bash
npm run build
```

4. Visualize a versão de produção:

```bash
npm run preview
```

## 📦 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Constrói o projeto para produção
- `npm run lint`: Executa o linter
- `npm run preview`: Visualiza a versão de produção

## 🛠️ Estrutura do Projeto

```
bidweb-desafio/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── styles/        # Estilos globais
│   ├── App.tsx        # Componente principal
│   └── main.tsx       # Ponto de entrada
├── public/            # Arquivos estáticos
├── index.html         # Template HTML
├── vite.config.ts     # Configuração do Vite
├── tsconfig.json      # Configuração do TypeScript
└── package.json       # Dependências e scripts
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
