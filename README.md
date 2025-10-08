# JavaScript Concepts

This repository contains implementations of various core and advanced JavaScript concepts.

---

## 🚀 Demo

[![Demo](https://img.shields.io/badge/Live%20Demo-JavaScript%20Concepts-blue?style=for-the-badge&logo=vercel)](https://javascript-concepts-drab.vercel.app/)

---

## 1. Debounce  
**Description:** Delays a function’s execution until a set amount of time has passed since its last call.  

[🎥 Demo Video](https://github.com/vmanidev/javascript-concepts/blob/9cfa0175de956dc6155d8b22b209e0e77f98aa1b/demo/debounce.mov)

[🌐 Live Demo](https://javascript-concepts-drab.vercel.app/debounce/index.html)

---

## 2. Throttle  
**Description:** Ensures a function runs at most once within a fixed time interval, regardless of how many times it’s triggered.  

[🎥 Demo Video](https://github.com/vmanidev/javascript-concepts/blob/50e0ac005a207cbe3cbab54752ba0746ac530c31/demo/throttle.mov)

[🌐 Live Demo](https://javascript-concepts-drab.vercel.app/throttle/index.html)

---

## 3. Polyfill   
**Description:** A polyfill is a technique that implements a feature in older environments or browsers that do not natively support it.

    ● Array.prototype.map()
    
    ● Array.prototype.filter()

---

## 4. Lazy Loading
**Description:** A technique that defers image loading until they are about to appear in the viewport. By leveraging the **`Intersection Observer API`**, it improves page performance, reduces initial load time, and optimizes bandwidth usage.

[🌐 Live Demo](https://javascript-concepts-drab.vercel.app/lazy-loading/lazy-loading.html)

---

## 5. Infinite Scroll 

**Description:** Dynamically loading cards as you scroll, using the **Intersection Observer API**. The implementation includes **performance optimizations** such as `DocumentFragment` and controlled DOM updates for smooth rendering.

[🌐 Live Demo](https://javascript-concepts-drab.vercel.app/infinite-scroll/index.html)

### Features

- Lazy-loads cards when the loader comes into view
- Uses `IntersectionObserver` to detect scrolling
- Wraps card creation in a `Promise` to handle unobserving/reobserving loader
- Optimized DOM updates using `DocumentFragment` and batched appends

---

## 6. Promises

**Description:**
Handles asynchronous operations in JavaScript, allowing sequential or parallel execution with proper success/error handling.

**Features:**

* Represents the eventual completion or failure of an async operation
* **Promise Chaining:** Execute tasks sequentially using `.then()`
* **Promise.all():** Run multiple promises in parallel; fails if any reject
* **Promise.allSettled():** Wait for all promises to settle regardless of outcome
* **Promise.race():** Resolves/rejects with the first settled promise
* **Promise.any():** Resolves with the first fulfilled promise; rejects with `AggregateError` if all fail

---

## Usage

```bash
git clone https://github.com/vmanidev/javascript-concepts.git

