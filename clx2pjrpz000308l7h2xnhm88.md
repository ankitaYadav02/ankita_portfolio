---
title: "Null in Javascript"
seoTitle: "null in javascript"
datePublished: Thu Jun 06 2024 03:38:28 GMT+0000 (Coordinated Universal Time)
cuid: clx2pjrpz000308l7h2xnhm88
slug: null-in-javascript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1706378092868/1e004732-1f0b-42c2-822e-bc69dbb4f5cf.png
tags: js, javascript, typescript, frontend-development

---

Null is an interesting term in JavaScript and has many use cases. let's take a deep dive into them,

**Define a null variable:** null in JavaScript represents an intentional absence of any object value and can be used as a value and also inferred as a type.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1706351173329/1eb376ce-802b-417f-935b-136b43ee8f99.png align="left")

**Nullable Types:** A variable can have a specific type and a **null** value, we can use both using **union** types which allows us to use multiple types for a single variable.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1706349132397/07af2844-86f0-4a54-93b3-7c3331bb9fc3.png align="left")

**Non-Nullable Assertion Operator ( ! ):** It helps you deal with situations where a variable might not have a value (**null**), making sure you don't run into problems when you try to use it.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1706349556831/7235c9c0-67e1-49c9-a501-847a0eb951a4.png align="center")

**Strict null checking: strictNullChecks** is a TypeScript **compiler** option that enhances code safety by enforcing stricter rules around handling null and undefined.

**Object Prototype:** In JavaScript, null is a **primitive** value, not an **object**, despite the confusing result of **typeof** null being 'object'.Null itself does not have a **prototype chain** when you use **Object.getPrototypeOf(null)**, it attempts to treat null as an object and that is where it will return you an **error**.

### Null vs Undefined

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1706894588203/9806c903-133b-4424-a10a-d869dbb3e505.png align="center")

**When should a function return null or undefined?**

The simple answer is that when there is no error-like situation and there is no value to refer to, return null. Undefined signifies an unintended absence of a value and we usually return undefined when the return value isn't explicitly set. Also, it varies from project to project, what standards they are following.