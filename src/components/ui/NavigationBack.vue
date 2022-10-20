<template>
  <div>
    <span @click="$router.go(-1)">
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </span>
  </div>
</template>

<script>
export default {
  name: "NavigationBack",
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  font-size: 2.4rem;
  align-items: center;
  height: 100%;

  span {
    &:hover {
      cursor: pointer;
      color: color.$font-active;
    }
  }
}
</style>
