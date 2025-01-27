---
title: "Configure HTTPS in Next.js development server: A Developer’s Guide"
seoTitle: "How to configure HTTPS in nextjs development server"
datePublished: Sun Jul 14 2024 05:49:52 GMT+0000 (Coordinated Universal Time)
cuid: clyl4z4y600000amjarpnaqmx
slug: configure-https-in-nextjs-development-server-a-developers-guide
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1720895200568/07214de7-9cbf-4846-b97c-45964625c296.webp
tags: javascript, https, web-development, frontend-development, nextjs, womenwhotech

---

Ensuring the **security** of your Next.js applications is crucial in today's web development environment. Running your application on **HTTPS** protects user data and overall trustworthiness. This guide was designed to help you set up HTTPS for your local Next.js development server for versions 12 and above, ensuring a secure and seamless experience

We'll cover everything from generating **SSL certificates** to configuring your Next.js application to use HTTPS. This **step-by-step tutorial** will help you secure your Next.js applications with ease.

Let's create a Nextjs Application first,

Run the below commands in your terminal to create a Nextjs application

```plaintext
  npx create-next-app
  cd my-next-app 
```

### Nextjs v13/v14

**Step 1**: Go to package.json file and replace your dev script with

```json
"dev": "next dev --experimental-https",
```

`--experimental-https` is a flag provided in nextjs itself. you can check more about this flag [here](https://nextjs.org/docs/pages/api-reference/next-cli#https-for-local-development)

**Step 2:** Run the below command in your terminal,

```plaintext
 npm run dev
```

It will create a certificates folder in your root directory, which will have two pem files one for a private key and another one for a signed certificate.

Congratulations 🎉 Now your Nextjs v13/v14 application development server is running on HTTPS.

### Nextjs v12

**Step 1:** Create a new folder to generate SSL certificates

```plaintext
mkdir certificates
```

**Step 2:** To generate a private key, you must install [OpenSSL](https://www.openssl.org/), a comprehensive toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols, on your local machine. Follow these guides to install OpenSSL on your operating system: [Windows](https://tecadmin.net/install-openssl-on-windows/)[.](#) | [Ubuntu](https://hostnextra.com/learn/tutorials/how-to-install-openssl-3-on-ubuntu)

For Mac, just run `brew install openssl`

After installing OpenSSL, you need to run the below command

```plaintext
  openssl genrsa -out key.pem
```

**Step 3:** Create a certificate signing request by running the below command

```plaintext
 openssl req -new -key key.pem -out csr.pem
```

**Step 4:** Generate the SSL certificate

```plaintext
  openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
```

This command takes a certificate signing request (`csr.pem`), signs it using the private key (`key.pem`), and generates a self-signed certificate (`cert.pem`) that is valid for 365 days. This certificate can then be used to enable HTTPS for your server, ensuring secure communication between the server and its clients.

**Step 5:** Make a `server.js` file in your root and add the below code

```javascript
const https = require('https')
const { parse } = require('url')
const fs = require('fs')
const path = require('path')
const next = require('next')
const port = 8000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname: 'localhost', port })
const handle = app.getRequestHandler()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, './cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './cert/cert.pem'))
}

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
    .listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on https://localhost:8000')
    })
})
```

**Step 6:** Go to `package.json` file and replace dev the script with

```json
"dev": "node server.js",
```

Congratulations🎉 Now your Nextjs v12 application development server is running on HTTPS.

By following these steps, you ensure that your application protects user data, and increases overall trustworthiness. Implementing HTTPS is a critical measure for maintaining the security and integrity of your web applications. Enjoy the benefits of a secure Next.js application and happy coding 👋