<template>
  <div class="input__box">
    <input spellcheck="false" autocomplete="off" type="text" />
    <span> Search </span>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/form.scss";

.input__box {
  margin-bottom: 1.6rem;
  input {
    font-size: 1.6rem;
    padding: 1.2rem 1.4rem;
    width: 32rem;
  }

  span {
    font-size: 4rem;
  }
}
</style>
