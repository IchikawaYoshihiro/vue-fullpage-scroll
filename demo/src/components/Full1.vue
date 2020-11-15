<template>
  <main v-touch:swipe="handler" @wheel="wheelHandler">
    <div>
      <section>
        <button @click="handler('bottom')">↑</button>
      </section>
      <section>
        <button @click="handler('right')">←</button>
        <strong>Page1</strong>
        <button @click="handler('left')">→</button>
      </section>
      <section>
        <button @click="handler('top')">↓</button>
      </section>
      <section>
        <router-link :to="{ name: 'full2' }">Router Link</router-link>
      </section>
      <slot />
    </div>
  </main>
</template>
<script>
export default {
  methods: {
    handler(direction) {
      this.$emit("fullpage-scroll", { direction, to: { name: "full2" } });
    },
    wheelHandler(e) {
      if (e.wheelDelta > 50) {
        this.$emit("fullpage-scroll", {
          direction: "bottom",
          to: { name: "full2" },
        });
      }
      if (e.wheelDelta < -50) {
        this.$emit("fullpage-scroll", {
          direction: "top",
          to: { name: "full2" },
        });
      }
    },
  },
};
</script>
<style scoped>
main {
  background-color: rgb(216, 144, 144);
}
</style>
