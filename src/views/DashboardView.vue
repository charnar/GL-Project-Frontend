<template>
  <Header></Header>
  <div class="work__in__progress">
    <h1>We're still working on it</h1>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "DashboardView",
  components: { Header },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3.6rem;
}
.work__in__progress {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
</style>
