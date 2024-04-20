# Desafio FrontEnd ProAssistance

## Configuração da IDE Recomendada

Para uma experiência ideal no desenvolvimento, sugerimos a utilização do [VSCode](https://code.visualstudio.com/) em conjunto com a extensão [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desativar o Vetur).

## Suporte de Tipo para Importações `.vue` em TypeScript

Por padrão, o TypeScript não consegue lidar com informações de tipo para importações `.vue`. Portanto, recomendamos substituir o CLI `tsc` pelo `vue-tsc` para a verificação de tipo. Nos editores, é necessário instalar o [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para que o serviço de linguagem TypeScript reconheça os tipos `.vue`.

## Configuração Personalizada

Para personalizar a configuração, consulte a [Referência de Configuração do Vite](https://vitejs.dev/config/).

## Configuração do Projeto

```sh
npm install
```

### Compilar e Recarregar Automaticamente para Desenvolvimento

```sh
npm run dev
```

### Verificação de Tipo, Compilação e Minificação para Produção

```sh
npm run build
```

### Executar Testes Unitários com [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint com [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Utilizando um Contêiner Docker

### Gerando uma Build do Sistema

```sh
docker build -t pro-assistance/latest .
```

### Executando a Imagem Docker

```sh
docker run -it -p 8080:80 --rm --name pro-assistance pro-assistance/latest
```