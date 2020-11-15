<template>
  <div class="fullpage-scroll-box" :class="currentDirection">
    <transition
      @before-enter="beforeTransition"
      @before-leave="beforeTransition"
      @after-enter="afterTransition"
      @after-leave="afterTransition"
    >
      <router-view v-on="$listeners" @fullpage-scroll="handle">
        <slot></slot>
      </router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "vue-fullpage-scroll",
  props: {
    direction: {
      type: String,
      default: "right",
    },
    duration: {
      type: Number,
      default: 1,
    },
    mode: {
      type: String,
      default: "ease",
    },
  },
  data() {
    return {
      currentDirection: "left",
    };
  },
  created() {
    this.currentDirection = this.direction;
  },
  watch: {
    direction(val) {
      this.currentDirection = val;
    },
  },
  computed: {
    transition() {
      return `all ${this.mode} ${this.duration}s`;
    },
  },
  methods: {
    beforeTransition(el) {
      el.style.transition = this.transition;
    },
    afterTransition(el) {
      el.style.transition = null;
      this.currentDirection = this.direction;
    },
    handle({ direction = null, to }) {
      if (direction) {
        this.currentDirection = direction;
      }
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
