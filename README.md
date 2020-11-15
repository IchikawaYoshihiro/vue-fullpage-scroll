# vue-fullpage-scroll
A transition component that provides full page scrolling in vue-router.

# demo
![demo](./docs/demo.png)

This demo uses [vue-touch-events](https://www.npmjs.com/package/vue2-touch-events) for swipe detection.

https://vue-fullpage-scroll.ichi-dev.info/

# Usage 
## Install via npm

```
npm install @yosichikaw/vue-fullpage-scroll
```

## Add to your application

```
import Vue from 'vue';
import VueFullpageScroll from "@yosichikaw/vue-fullpage-scroll";

Vue.use(VueFullpageScroll);
```

App.vue
```
<template>
  <vue-fullpage-scroll />
</template>
```
