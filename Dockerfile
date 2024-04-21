# Estágio de compilação
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
# Instalando dependências
RUN npm install
# Copiando os dados
COPY . .
# Gerando a build
RUN npm run build

# Estágio de produção
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
