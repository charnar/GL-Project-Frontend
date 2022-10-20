<template>
  <div class="account__item">
    <img :src="serviceIcon" :alt="serviceName" />
  </div>
</template>

<script>
export default {
  name: "AccountItem",
  props: ["serviceName", "serviceLink", "serviceIcon"],
};
</script>

<style lang="scss" scoped>
$dimensions: 8.4rem;
.account__item {
  height: $dimensions;
  width: $dimensions;
  overflow: hidden;
  border-radius: 1rem;
  @include mixin.box-shadow();

  img {
    width: 100%;
  }
}
</style>
