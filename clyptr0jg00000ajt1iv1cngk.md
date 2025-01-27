---
title: "Top 10 Lodash Functions in my Everyday Coding"
datePublished: Wed Jul 17 2024 12:34:29 GMT+0000 (Coordinated Universal Time)
cuid: clyptr0jg00000ajt1iv1cngk
slug: top-10-lodash-functions-in-my-everyday-coding
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1721219324518/68fe2460-03f1-4215-b190-ea3ab4c5da78.jpeg
tags: javascript, web-development, lodash, typescript, frontend-development, womenwhotech

---

Efficiency is crucial nowadays. We often face repetitive tasks and boilerplate code. [**Lodash**](https://lodash.com/), a **JavaScript utility library**, simplifies these tasks with a rich set of functions for **arrays**, **objects**, **strings**, and more.  
Some top **lodash functions** that I use to streamline my daily coding routine, making my code cleaner and more efficient.

You can install lodash in your javascript project by using the below commands

```typescript
npm install lodash
```

Let's dive into the lodash functions, and let's take an example data

```typescript
const allUsers = [
  { id: 101, name: 'Shreya', profession: 'Teacher' },
  { id: 102, name: 'Neetu', profession: 'Athelete' },
  { id: 103, name: 'Vidhi', profession: 'Teacher' },
  { id: 104, name: 'Sheetal', profession: 'Doctor' },
  { id: 105, name: '', profession: 'Athelete' },
];Ï

const selectedUser = { id: 103, name: 'Vidhi' };
```

1. **map**
    
    returns a new array containing all users Id's
    
    ```typescript
    map(allUsers, 'id');
    //[101, 102, 103, 104]
    ```
    
2. **find**
    
    find an element of the array which meets a specific condition
    
    ```typescript
    find(allUsers, { id: selectedUser.id });
    // { id: 103, name: 'Vidhi', profession: 'Teacher' },
    ```
    
3. **flattenDeep**
    
    recursively flattens a nested array.
    
    ```typescript
    const userIds = [101, 102, 103, 104,[105, [106, [107]]], [108, [109]]];
    flattenDeep(userIds);
    //[101, 102, 103, 104, 105, 106, 107, 108, 109]
    ```
    
4. **groupBy**
    
    groups array elements by the result of the iteratee function.
    
    ```typescript
     groupBy(allUsers, (user) => user.profession);
    { 
        "Teacher" : [ { id: 101, name: 'Shreya', profession: 'Teacher' },
           { id: 103, name: 'Vidhi', profession: 'Teacher' }
         ],
        "Athelete":[{ id: 102, name: 'Neetu', profession: 'Athelete' },
            { id: 105, name: '', profession: 'Athelete' },    
        ],
        "Doctor":[{ id: 104, name: 'Sheetal', profession: 'Doctor' }]
     }
    ```
    
5. **omit**
    
    creates an object excluding the specified keys.
    
    ```typescript
    omit(selectedUser, 'name')
    //{id: 103}
    ```
    
6. **escape**
    
    converts characters "&", "&lt;", "&gt;", '"', and "'" in the string to their corresponding HTML entities.
    
    ```typescript
    escape('You are doing that & why');
    //You are doing that &amp; why
    ```
    
7. **get**
    
    retrieves the value at the given path of an object.
    
    ```typescript
    get(selectedUser, 'name')
    //Vidhi
    ```
    
8. **isNil**
    
    check if the value is null or undefined.
    
    ```typescript
    isNil(null) //true
    isNil(undefined) //true
    isNil('') // false
    ```
    
9. **some**
    
    check if any element in the array meets the condition.
    
    ```typescript
    some(allUser, 'name'); //true
    some(allUser, 'id'); //true
    ```
    
10. **every**
    
    check if every component of the array meets the condition.
    
    ```typescript
    every(allUser, 'name'); //false
    every(allUser, 'id'); //true
    ```
    

Do let me know in the comments, which lodash functions make your day-to-day coding easier.

Happy Coding 👋