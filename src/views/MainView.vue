<template>
  <div>
    <TheHeader></TheHeader>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader";
export default {
  name: "MainView",
  components: { TheHeader },
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
