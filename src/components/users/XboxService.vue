<template>
  <button :disabled="this.disableFlag"></button>
</template>

<script>
export default {
  name: "XboxButton",
  props: ["disableFlag"],
};
</script>

<style lang="scss" scoped>
button {
  background: url("@/assets/img/xbox_logo.png") no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #3c3c3c;
  opacity: 0.4;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  height: 100px;
  width: 100px;
  align-content: center;
  font-weight: 600;
}
</style>
