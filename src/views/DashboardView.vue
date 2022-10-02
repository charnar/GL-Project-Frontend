<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
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
