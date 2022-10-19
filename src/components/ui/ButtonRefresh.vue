<template>
  <div class="btn__refresh__container" @click="onRefreshClick">
    <font-awesome-icon icon="fa-solid fa-rotate" />
  </div>
</template>

<script>
export default {
  name: "ButtonRefresh",

  props: ["handler"],

  methods: {
    async onRefreshClick(e) {
      try {
        this.toggleAnimation(e);
        this.handler && (await this.handler());
        this.toggleAnimation(e);
      } catch (err) {
        console.error(err);
      }
    },

    toggleAnimation(event) {
      event.target
        .closest(".btn__refresh__container")
        .classList.toggle("btn__animate");

      event.target
        .closest(".btn__refresh__container")
        .classList.toggle("disabled");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn__refresh__container {
  color: color.$font-inactive;
  font-size: 2rem;
  margin: 0 2rem;
  @include animation.transition(0.25s, color);
}

.btn__animate {
  color: color.$font-active;
  @include animation.spin-component(600ms);
}

.disabled {
  pointer-events: none;
}
</style>
