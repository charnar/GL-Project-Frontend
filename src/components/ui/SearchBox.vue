<template>
  <div class="input__box">
    <input
      spellcheck="false"
      autocomplete="off"
      type="text"
      :value="currentSearch"
      @keyup="searchTimeOut"
    />
    <span
      ><font-awesome-icon icon="fa-solid fa-magnifying-glass" /> Search</span
    >
  </div>
</template>

<script>
import { TIMEOUT_SEARCH } from "@/configs";
export default {
  name: "SearchBox",
  props: ["currentSearch", "handler"],

  methods: {
    searchTimeOut(e) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(() => {
        this.handler && this.handler(e.target.value);
      }, TIMEOUT_SEARCH);
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
