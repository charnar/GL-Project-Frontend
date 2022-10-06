<template>
  <select name="" id="" @change="onChange">
    <option v-for="option in options" :key="option">
      {{ option }}
    </option>
  </select>
</template>

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

<style lang="scss" scoped></style>
