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

<style lang="scss" scoped>
select {
  height: 4rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
}
</style>
