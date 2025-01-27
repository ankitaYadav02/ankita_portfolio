---
title: "Generating Sitemaps in next.js"
seoTitle: "How to generate sitemap in nextjs"
seoDescription: "Generate sitemap for static and dynamic routes for nextjs application."
datePublished: Sat Jun 08 2024 17:33:42 GMT+0000 (Coordinated Universal Time)
cuid: clx6e9leq00000akxae2o8yt4
slug: generating-sitemaps-in-nextjs
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1717867118078/b8a5ffca-8f9f-4915-93a0-3202db77c6d8.webp
tags: seo, frontend-development, nextjs, sitemap

---

[**Sitemap**](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) is a file that provides information about your **site routes**, and site content to **search engine crawlers** and they will index your **site content**.  
The most common formats for sitemap files are **XML** and also it can be in **RSS** and **text** format too.  
It will be located in the root directory of your folder.

Let's try to create static as well as dynamic sitemap file :

we will use the [next-sitemap](https://www.npmjs.com/package/next-sitemap) package to create sitemap files.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1717778697120/a17bc2b8-544a-429b-aac4-dd04656165cb.png align="center")

Create `next-sitemap.config.js` in your root directory.

### Static routes Sitemap

Add the below code in your `next-sitemap.config.js` file.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1717778976247/3e19338b-58d0-445e-a3d6-44995ef938cc.png align="center")

Go to package.json and add `postbuild": "next-sitemap"` to scripts.

Run this script using `yarn run postbuild` command and you will see a static sitemap.xml will be created in your public folder which will have all your static routes from the pages directory.

### Dynamic routes sitemap

Create `pages/server-sitemap.xml/index.tsx` file and add below code there.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1717866425286/9a850556-d33f-4984-9f9e-4e4d765978d4.png align="center")

Add the below code in your `next-sitemap.config.js` file.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1717866612353/5a0a941d-b7e1-4e31-8260-98e144e9cbcb.png align="center")

Go to package.json and add `postbuild": "next-sitemap"` to scripts.

Run this script using `yarn run postbuild` command and you will see a static sitemap.xml will be created in your public folder which will have all your static routes from the pages directory.  
  
you can also visit your sitemap.xml file at `/server-sitemap.xml` route and see all routes added from your application there.

Do not forget to add `yarn run postbuild` in your deployment step.