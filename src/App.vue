<template>
  <Header v-show="isAuthenticated"></Header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",

  components: { Header },

  methods: {},

  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
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
  color: color.$font-main;
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
  @include mixin.gradient-bg(
    0.25turn,
    color.$bg-gradient-start,
    color.$bg-gradient-end
  );
}
</style>
