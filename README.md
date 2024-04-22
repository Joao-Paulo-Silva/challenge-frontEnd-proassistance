# Desafio FrontEnd ProAssistance - **João Paulo**

## Sumário

1. [Configuração do Projeto](#configuração-do-projeto)
   - [Instalação das Dependências do Projeto](#instalação-das-dependências-do-projeto)
   - [Compilar e Recarregar Automaticamente para Desenvolvimento](#compilar-e-recarregar-automaticamente-para-desenvolvimento)
   - [Verificação de Tipo, Compilação e Minificação para Produção](#verificação-de-tipo-compilação-e-minificação-para-produção)
   - [Executando em Produção](#executando-em-produção)
   - [Executar Testes Unitários com Vitest](#executar-testes-unitários-com-vitest)
   - [Lint com ESLint](#lint-com-eslint)
2. [Utilizando um Contêiner Docker](#utilizando-um-contêiner-docker)
   - [Gerando uma Build do Sistema](#gerando-uma-build-do-sistema)
   - [Executando a Imagem Docker](#executando-a-imagem-docker)
3. [Executando com Docker Compose](#executando-com-docker-compose)

## Configuração do Projeto

### Instalação das Dependências do Projeto

Execute este comando para instalar todas as dependências necessárias do projeto.

```sh
npm install
```

As principais dependências do projeto são:

- **oh-vue-icons**: Uma biblioteca de ícones para Vue.js.
- **pinia**: Um gerenciador de estado para Vue.js.
- **vue**: O próprio framework Vue.js.
- **vue-router**: O roteador oficial para Vue.js.

### Compilar e Recarregar Automaticamente para Desenvolvimento

Este comando compila o código e inicia um servidor de desenvolvimento que 
recarrega automaticamente quando você faz alterações no código.

```sh
npm run dev
```

### Verificação de Tipo, Compilação e Minificação para Produção

Este comando realiza a verificação de tipo, compilação e minificação do código 
para produção.

```sh
npm run build
```

### Executando em Produção

Este comando executa a aplicação em modo de produção.

```sh
npm run preview
```

### Executar Testes Unitários com Vitest

Execute este comando para executar os testes unitários usando Vitest.

```sh
npm run test:unit
```

### Lint com ESLint

Execute este comando para verificar o código em busca de problemas com ESLint.

```sh
npm run lint
```

## Utilizando um Contêiner Docker

### Gerando uma Build do Sistema

Este comando gera uma imagem Docker para o sistema.

```sh
docker build -t pro-assistance/latest .
```

### Executando a Imagem Docker

Este comando executa a imagem Docker criada anteriormente.

```sh
docker run -it -p 8080:80 --rm --name pro-assistance pro-assistance/latest
```

## Executando com Docker Compose

Este comando executa o sistema utilizando Docker Compose.

```sh
docker-compose up -d
```