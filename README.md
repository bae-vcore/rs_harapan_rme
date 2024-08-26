# RME RS HARAPAN - PEMATANG SIANTAR

## Deploy Nginx

- jalankan yarn build / npm build
- arahkan path dist folder setelah berhasil build projek ke nginx config

exaple :

nginx.conf

```
server {
        listen 4173;
        listen localhost;
        server_name rme_web alias rme_web_app;

        location / {
            root C:/Users/HP-PC/Code/Work/rme_web/dist;  # path build folder
            index index.html;
            try_files $uri $uri/ /index.html;
        }
    }
```
