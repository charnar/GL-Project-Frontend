<template>
  <select class="sort__dropdown">
    <option value="alphabetically">A - Z</option>
    <option value="placeholder2">Date purchased</option>
    <option value="placeholder3">Favorites</option>
  </select>
</template>

<script>
export default {
  name: "SortDropdown",
  props: ["options", "handleChange"],
  methods: {
    onChange(e) {
      this.handleChange && this.handleChange(e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.sort__dropdown {
  padding: 0.8rem 0.6rem;
  border-radius: 0.5rem;
}
</style>
