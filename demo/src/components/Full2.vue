<template>
  <main v-touch:swipe="handler" @wheel="wheelHandler">
    <div>
      <section>
        <button @click="handler('bottom')">↑</button>
      </section>
      <section>
        <button @click="handler('right')">←</button>
        <strong>Page2</strong>
        <button @click="handler('left')">→</button>
      </section>
      <section>
        <button @click="handler('top')">↓</button>
      </section>
      <section>
        <router-link :to="{ name: 'full1' }">Router Link</router-link>
      </section>
      <slot />
    </div>
  </main>
</template>
<script>
export default {
  methods: {
    handler(direction) {
      this.$emit("fullpage-scroll", { direction, to: { name: "full1" } });
    },
    wheelHandler(e) {
      if (e.wheelDelta > 50) {
        this.$emit("fullpage-scroll", {
          direction: "bottom",
          to: { name: "full1" },
        });
      }
      if (e.wheelDelta < -50) {
        this.$emit("fullpage-scroll", {
          direction: "top",
          to: { name: "full1" },
        });
      }
    },
  },
};
</script>
<style scoped>
main {
  background-color: rgb(144, 144, 216);
}
</style>
