# Remote function execution server

to generate the .pem

```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365
```

if a paraphrase problem occur 

```bash
# gen new RSA
openssl rsa -in key.pem -out newkey.pem 

# replace old .pem file
mv newkey.pem key.pem
```
