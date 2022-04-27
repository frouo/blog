---
title: "How to generate SSL certificate"
excerpt: "Secure your website with SSL certificate. In this post, let's generate SSL Certificate with Lets Encrypt."
environment: "Server"
coverImage: "/assets/blog/certbot/cover.jpg"
date: "2021-09-21"
author:
  name: François Rouault
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/certbot/cover.jpg"
---

### 1. Install certbot

```sh
brew install certbot
```

> Certbot is a free, open source software tool for automatically using Let’s Encrypt certificates on manually-administrated websites to enable HTTPS.
>
> Certbot is made by the Electronic Frontier Foundation (EFF), a 501(c)3 nonprofit based in San Francisco, CA, that defends digital privacy, free speech, and innovation.

### 2. Run

```sh
sudo certbot certonly --manual --preferred-challenges dns
```

Follow the CLI instructions:

![](/assets/blog/certbot/sudo_certbot_1.jpg)

### 3. Add TXT entry in your DNS zone

In your domain registrar, deploy a new TXT record in your domain DNS zone. I am using [OVH](https://ovh.com):

![](/assets/blog/certbot/add_txt_dns_zone.jpg)

The TXT modification will be applied immediately on the DNS zone, but the change may take up to 24 hours to propagate.

In my case, the change spread almost instantly.

Une online tools, such as the [Google Admin Toolbox ↗](https://toolbox.googleapps.com/apps/dig/#TXT/), to check if your TXT has been deployed.

Once deployed, hit <kbd>Enter</kbd> to continue...

### 4. Here is your certificate

Let's Encrypt will check the TXT record, sign the cert, and certbot will save it for you to upload to Heroku.

![](/assets/blog/certbot/sudo_certbot_2.jpg)

_Note this certificate expires in 3 months, on 2021-12-20. I am writing this lines on 2021-09-21._

## References

[Certbot - Install instructions ↗](https://certbot.eff.org/lets-encrypt/osx-other.html)

[Certbot - About ↗](https://certbot.eff.org/about/)

## Thank you

Hope it helps.
