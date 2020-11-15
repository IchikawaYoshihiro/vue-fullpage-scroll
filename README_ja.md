# vue-fullpage-scroll
vue-router でフルページスクロールができるコンポーネント。

English: [README.md](./README.md)

# demo
https://vue-fullpage-scroll.ichi-dev.info

スワイプイベントの検知には [vue-touch-events](https://www.npmjs.com/package/vue2-touch-events) を使用しています。

# 使い方
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

`router-link` や `$router.push` でページ遷移すると `direction` プロパティで指定した方向から次のページが登場します。

方向を指定する場合はvue-router内のページから `fullpage-scroll` イベントを発火させて遷移してください。

```
$emit('fullpage-scroll', {direction, to});
```

- `direction` : `left, right, top, bottom` のいずれか
- `to` : `router-link` で指定できる `to` オブジェクト

SomePage.vue
```
<template>
  <div>
    <button @click="handler">上から来るぞ 気をつけろ！</button>
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
|direction|String|`right`| 次のページがどの方向から登場するか（`left, right, top, bottom`）|
|mode|String|`ease`| トランジションの時間（秒）|
|duration|Number|`1`| トランジションのモード|
