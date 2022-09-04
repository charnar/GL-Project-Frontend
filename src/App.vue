<template>
  <router-view
    @toggle-form="toggleForm"
    :showRegisterForm="showRegisterForm"
  ></router-view>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      showRegisterForm: false,
    };
  },

  methods: {
    toggleForm() {
      this.showRegisterForm = !this.showRegisterForm;
    },
  },
};
</script>

<style lang="scss">
// Font Imports
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-font-main;
}

html {
  font-size: 62.5%;
}

h1 {
  font-size: 4rem;
  font-weight: 500;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}

body {
  background: linear-gradient(
    0.25turn,
    $color-bg-gradient-start,
    $color-bg-gradient-end
  );
}
</style>
