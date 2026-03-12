FROM nginx:alpine
# Como ahora los archivos están en la raíz, copiamos todo al servidor
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
