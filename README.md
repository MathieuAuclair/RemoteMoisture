# Simple remote code execution server
For those who like firebase, but don't want to pay for it!


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

to run simply enter

```
node app.js
```

A https cross-over domain remote code execution server will be served on port 3000, you can try "/" for a simple hello the world

## Mailgun

I'm using this server for a serverless pages on github to let people suscribe to a mailing list! See "/add" for demo

#### If you plan on using mailgun, don't forget your API key in the ```.env``` file.
