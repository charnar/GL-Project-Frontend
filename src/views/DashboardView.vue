<template>
  <div>
    <Header></Header>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
