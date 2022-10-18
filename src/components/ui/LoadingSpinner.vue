<template>
  <div class="loader spinner__container"></div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_components.scss";

.spinner__container {
  width: 5rem;
  height: 5rem;
  margin-top: 2rem;
}
</style>
