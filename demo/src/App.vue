<template>
  <div id="app">
    <h1 v-if="!full">Vue Fullpage Scroll DEMO</h1>
    <div class="wrap">
      <aside v-if="!full">Non full page supported</aside>
      <vue-fullpage-scroll class="scroll">
        <section>
          <label>
            <input type="checkbox" v-model="full" />
            Full Page
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
