<template>
  <div class="service__btn__wrapper">
    <button @click="handleClick" :disabled="this.disableFlag"></button>
  </div>
</template>

<script>
export default {
  name: "OriginService",
  props: ["disableFlag"],

  methods: {
    handleClick(e) {},
  },
};
</script>

<style lang="scss" scoped>
button {
  background: url("@/assets/img/origin_logo.png");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  height: 100px;
  width: 100px;
  align-content: center;
  font-weight: 600;
  opacity: 0.4;
}
</style>
