# el punto de entrada siempre es otra imagen en las de alpine
# ya tiene instalado node
# se puede especificar la plataforma para esta imagen de procesador
# FROM --platform=arm64 node:19.2.0-alpine3.17
FROM node:19.2.0-alpine3.17
# /app este directorio ya existe con alpine y sera nuestro directorio para la aplicacion
WORKDIR /app
# copiamos los archivos que nuestra app necesita para funcionar 
# source dest
# el destino por default es /app pero al poner ./ es porque ya estamos ahi
COPY cron-app.js package.json ./
# tambien ocupamos los modulos de node por lo que ejecutamos el npm i
RUN npm i
# eliminar archivos
RUN rm -rf node_modules
# instalar solo dependencias de produccion
RUN npm i --prod
# ejecutamos la aplicacion
CMD ["node","cron-app.js"]