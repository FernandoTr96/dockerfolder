# Docker
Configuraciones y practicas con docker para aprender

## Terminos
+ Docker compose: herramienta para generar aplicaciones multicontenedor
+ Dockerfile: herramienta para crear instrucciones que crean una imagen de contenedor

## Comandos
+ docker compose up: levantar todos los servicios creados con docker compose
+ docker build --tag nombre . : crear imagen del dockerfile
+ docker build --tag nombre:1.0.0 . : rebuild de una imagen mediante versionamiento
+ docker image tag nombre:version nuevoNombre:nuevaVerison : renombrar version de una imagen
+ docker exec -it id /bin/sh : abrir consola mediante el id del contenedor 
+ docker buildx: crear imagenes para distintas arquitecturas https://docs.docker.com/build/building/multi-platform/#getting-started
