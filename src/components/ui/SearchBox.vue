<template>
  <div class="input__box">
    <input
      spellcheck="false"
      autocomplete="off"
      type="text"
      @blur="handleSearch"
      :value="currentSearch"
    />
    <span
      ><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Search</span
    >
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  props: ["currentSearch", "handler"],

  methods: {
    handleSearch(e) {
      this.handler && this.handler(e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/form";

.input__box {
  max-width: 40rem;
  margin-bottom: 1rem;
  input {
    font-size: 1.6rem;
    padding: 1rem;
  }
}
</style>
