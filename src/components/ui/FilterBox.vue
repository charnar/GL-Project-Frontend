<template></template>

<script>
export default {
  name: "FilterBox",
  props: ["options", "handleChange"],
  methods: {
    onChange(e) {
      this.handleChange && this.handleChange(e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
// @include mixin.gradient-bg(
//   0.25turn,
//   color.$btn-gradient-active-start,
//   color.$btn-gradient-active-end
// );
</style>
