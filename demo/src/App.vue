<template>
  <div id="app">
    <h1 v-if="!full">Vue Fullpage Scroll DEMO</h1>
    <div class="wrap">
      <aside v-if="!full">You don't need a full screen to use it!</aside>
      <vue-fullpage-scroll class="scroll" :direction="direction">
        <section>
          <label>
            <input type="checkbox" v-model="full" />
            Full Page
          </label>
        </section>
        <section>
          <label>
            Default direction
            <select v-model="direction">
              <option value="">Null</option>
              <option value="left">Left</option>
              <option value="right">right</option>
              <option value="bottom">bottom</option>
              <option value="top">top</option>
            </select>
          </label>
        </section>
      </vue-fullpage-scroll>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full: false,
      direction: "right",
    };
  },
};
</script>
<style lang="scss">
// for app
body {
  margin: 0;
}
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  h1 {
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  .wrap {
    display: flex;
    flex-direction: row;
    height: 100%;
    aside {
      padding: 0.5rem;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      background-color: rgb(144, 216, 144);
    }
  }
}

// for pages
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
section {
  text-align: center;
}
button {
  padding: 1rem;
  color: #fff;
  background-color: rgb(255, 255, 255, 0.1);
  border: none;
}
</style>
