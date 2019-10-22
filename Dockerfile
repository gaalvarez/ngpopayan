# Stage 0, "build-stage", usa una imagen de node para poder compilar el proyecto
FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, "deploy-stage" usa una imagen de nginx para desplegar los recursos compilados
FROM nginx:1.16

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

# Las configuraciones por defecto de la imagen "build-stage"
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
