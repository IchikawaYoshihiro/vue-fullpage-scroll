<template>
  <div class="fullpage-scroll-box" :class="direction">
    <transition>
      <router-view @fullpage-scroll="handle">
        <slot></slot>
      </router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "vue-fullpage-scroll",
  data() {
    return {
      direction: "left",
    };
  },
  methods: {
    handle({ direction = "left", to }) {
      this.direction = direction;
      this.$router.push(to).catch((e) => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.fullpage-scroll-box {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .v-leave-active,
  .v-enter-active {
    position: absolute;
    transition: all ease 1s;
  }
  .v-leave,
  .v-enter-to {
    top: 0;
    left: 0;
  }

  &.left {
    .v-leave-to {
      left: -100%;
    }
    .v-enter {
      left: 100%;
    }
  }
  &.right {
    .v-leave-to {
      left: 100%;
    }
    .v-enter {
      left: -100%;
    }
  }
  &.top {
    .v-leave-to {
      top: -100%;
    }
    .v-enter {
      top: 100%;
    }
  }
  &.bottom {
    .v-leave-to {
      top: 100%;
    }
    .v-enter {
      top: -100%;
    }
  }
}
</style>
