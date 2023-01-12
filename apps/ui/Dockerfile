FROM nginx:stable

COPY ./src /usr/share/nginx/html
COPY ./nginx/templates /etc/nginx/templates

CMD ["/bin/sh" , "-c" , "envsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]