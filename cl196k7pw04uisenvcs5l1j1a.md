---
title: "Disable body scroll on a specific scrollable HTML element"
datePublished: Sun Mar 27 2022 11:10:44 GMT+0000 (Coordinated Universal Time)
cuid: cl196k7pw04uisenvcs5l1j1a
slug: disable-body-scroll-on-a-specific-scrollable-html-element
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1648379362764/ETWXxTtu4.gif
tags: javascript, developer, dom, ui, frontend-development

---


Adding a scroll over on a specific `div` element with an existing default or native body scroll over it, can be tough and very time-consuming but we can override this default scroll behavior over a specific `div` using a couple of methods including Javascript and CSS. 
We can use the combination of Javascript and CSS by which a specific `div` element in the body can take control of a full-body scroll.

Primarily the main motto is to remove or control the default scroll behavior of the body when scrolling over that particular `div` and override this with our own functionalities if required.
Let's discuss these solutions one by one.

### Method 1: By preventing scroll event
To prevent a scroll event,
- Call the `addEventListener()` method on the target element.
- Assign an event handler on the `scroll` event property of the target element.
- Use the `preventDefault()` method to stop the default action of a selected element from happening by a user. It will remove the default behavior of the event, which is scrolling in our case.
- Add the `passive` flag `false` to indicate that the function specified by the listener will call `preventDefault()`.

```js 
document.getElementById("targetElementId").addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
  },
  {
    passive: false
  }
);
``` 
---

### Method-2 : Using CSS
In this method we will make the `overflow: hidden` of the body when the user's cursor enters inside the target element and again make the `overflow: auto` when the curser moves outside of the element.  
To prevent a scroll event using CSS will involve
- Add the `addEventListener()` to track the entry of the mouse.
- Assign an event handler for the event `pointerenter` of the target element.
- Add `overflow: hidden` property to the body to disable scroll and hide the scrollbar.

```js 
document.getElementById('targetElementId').addEventListener(
  'pointerenter',
  () => {
    document.body.style = 'overflow : hidden'
  },
  {
    passive: false,
  }
)
```
- Add the `addEventListener()` to track the exit of the mouse.
- Assign an event handler for the event `pointerleave` of the target element.
- Add `overflow: auto` property to the body to enable the scroll and show the scrollbar again.

```js 
document.getElementById('targetElementId').addEventListener(
  'pointerleave',
  () => {
    document.body.style = 'overflow : auto';
  },
  {
    passive: false,
  }
)
```

But there's an important and annoying issue with this method. When we make the body `overflow: hidden`, a layout shift happens as the native scrollbar disappears, and then again when we make the body `overflow: auto`, one more layout shift happens when the scrollbar appears again.

To resolve the layout shifting issue, we will add the padding on the right exactly on the place of the scrollbar  (right side of the body) when the scrollbar disappears. 

```js 
document.getElementById("targetElementId").addEventListener(
  "pointerenter",
  () => {
    // Calculating the widht of the scrollbar. This varies between different browsers and OS.
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style = `overflow : hidden; padding-right : ${scrollbarWidth}px`;
  },
  {
    passive: false
  }
);
```
And now removing the padding, as the scrollbar will appear again.

```js 
document.getElementById('targetElementId').addEventListener(
  'pointerleave',
  () => {
    document.body.style = 'overflow: auto; padding-right: 0'
  },
  {
    passive: false,
  }
)
```

Here is the codesandbox demo, if you want to play more with the code.
[![Edit disable-body-scroll](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/disable-body-scroll-ik2u9?fontsize=14&hidenavigation=1&theme=dark)

















