<template>
  <div class="service__btn__wrapper">
    <button @click="handleClick" :disabled="this.disableFlag"></button>
  </div>
</template>

<script>
export default {
  name: "EpicService",
  props: ["disableFlag"],

  methods: {
    handleClick(e) {
      console.log("nothing to see here yet");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: url("@/assets/img/epic_logo.jpg");
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

  &:hover {
    cursor: pointer;
  }
}
</style>
