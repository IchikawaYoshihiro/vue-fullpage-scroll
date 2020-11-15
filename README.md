# vue-fullpage-scroll
A component that provides full page scrolling for vue-router.

日本語： [README_ja.md](./README_ja.md)

# demo
https://vue-fullpage-scroll.ichi-dev.info

This demo uses [vue-touch-events](https://www.npmjs.com/package/vue2-touch-events) to detect swipe events.

# Usage
## Install
```
npm install @yosichikaw/vue-fullpage-scroll
```

## Import
```
import Vue from 'vue';
import VueFullpageScroll from "@yosichikaw/vue-fullpage-scroll";

Vue.use(VueFullpageScroll);
```

App.vue
```
<template>
  <div>
    <vue-fullpage-scroll />
  </div>
</template>
```

## emit event

The next page appears from the direction specified by the `direction` property when a page transition is performed by `router-link` or `$router.push`.

If you want to specify the direction, fire the `fullpage-scroll` event from a page in vue-router.

```
$emit('fullpage-scroll', {direction, to});
```

- `direction`: One of `left, right, top or bottom`
- `to`: An object specified by `router-link`

SomePage.vue
```
<template>
  <div>
    <button @click="handler">From above</button>
  </div>
</template>
<script>
export default {
  methods: {
    handler() {
      this.$emit("fullpage-scroll", { 
        direction: 'top', 
        to: { name: "nextPage" } 
      });
    },
  }
}
</script>
```

## Properties 

|Property|Type|Default|Description|
|---|---|---|---|
|direction|String|`right`| which direction the next page will appear from (`left, right, top, bottom`)|
|mode|String|`ease`| transition time in seconds|
|duration|Number|`1`| mode of Transition|
