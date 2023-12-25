# el punto de entrada siempre es otra imagen en las de alpine
# ya tiene instalado node
# se puede especificar la plataforma para esta imagen de procesador
# FROM --platform=arm64 node:19.2.0-alpine3.17
# si queremos usar docker buildx --> FROM --platform=$BUILDPLATFORM node:19.2.0-alpine3.17
FROM node:19.2.0-alpine3.17 AS depsDev
# /app este directorio ya existe con alpine y sera nuestro directorio para la aplicacion
WORKDIR /app
# copiamos los archivos que nuestra app necesita para funcionar 
# source dest
# el destino por default es /app pero al poner ./ es porque ya estamos ahi
COPY package.json ./
# tambien ocupamos los modulos de node por lo que ejecutamos el npm i
RUN npm i

# si hubiera testing
# FROM node:19.2.0-alpine3.17 AS builder
# WORKDIR /app
# COPY --from=depsDev /app/node_modules ./node_modules
# COPY . .
# RUN npm run test

FROM node:19.2.0-alpine3.17 AS depsProd
WORKDIR /app
COPY package.json ./
RUN npm i --prod

FROM node:19.2.0-alpine3.17 AS runner
WORKDIR /app
COPY --from=depsProd /app/node_modules ./node_modules
COPY cron-app.js ./
# ejecutamos la aplicacion
CMD ["node","cron-app.js"]