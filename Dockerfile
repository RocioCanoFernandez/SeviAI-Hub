FROM nginx:alpine
# Copiamos TODO lo que haya en el repositorio a la carpeta de la web
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]