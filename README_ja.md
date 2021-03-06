# vue-fullpage-scroll
vue-router でフルページスクロールができるコンポーネント。

English: [README.md](./README.md)

# demo

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
通常のページ遷移にするには `direction` に `null` を渡してください。

```
$emit('fullpage-scroll', {direction, to});
```

- `direction` : `'left', 'right', 'top', 'bottom', null` のいずれか
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
        direction: 'bottom', 
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
|direction|String|`left`| （現在のページが退場していく）スクロール方向。（`'left', 'right', 'top', 'bottom', null`）|
|mode|String|`ease`| トランジションのモード |
|duration|Number|`1`| トランジションの時間（秒） |
