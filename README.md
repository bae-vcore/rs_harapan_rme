# RME RS HARAPAN - PEMATANG SIANTAR

## Build / Run on Local

- dengan `npm` : jalankan `npm run install`, dengan `yarn` : `yarn install`
- untuk development, jalankan perintah `npm run dev` atau dengan yarn : `yarn dev`
- lalu build dengan perintah `npm run build` atau jika menggunakan `yarn` : `yarn build`, maka akan dibuat folder dist berisi file html dan assets

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

## Get Report IGD

required parameter :

- no_reg
- nor_rm

opsional parameter:

- tanggal
- person

example:

```
http://localhost:5173/report/form-igd?no_reg=no_reg&no_rm=no_rm&tanggal=2024-08-28&person=person
```

## Get Report CPPT

required parameter :

- no_rm
- jwt token

example:

```
http://localhost:5173/report/cppt?no_rm=123&token=token
```

## Get Report Triase

required parameter :

- no_reg
- no_rm
- jwt token

opsional parameter :

- tanggal

example:

```
http://localhost:5173/report/triase?tanggal=2024-08-26&no_rm=no_rm&no_reg=no_reg&token=token
```
