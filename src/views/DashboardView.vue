<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "DashboardView",
  components: { Header },
};
</script>

<style lang="scss">
h1 {
  font-size: 3.6rem;
}
</style>
