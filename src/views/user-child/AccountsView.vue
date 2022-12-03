<template>
  <section class="section__accounts">
    <h1 class="services__container__heading">Add Account</h1>

    <SteamButton></SteamButton>
  </section>
</template>

<script>
import SteamButton from "@/components/users/SteamButton";

export default {
  name: "AccountsView",
  components: {
    SteamButton,
  },
};
</script>

<style lang="scss" scoped>
.services__container,
.linked__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 84px);
  gap: 2.6rem;
  margin: 1rem 0;
}

.linked__container {
  padding: 2.6rem;
  background: rgba(100, 100, 100, 0.1);
  border-radius: 2rem;
}

.linked__container__heading {
  margin-top: 4rem;
  font-weight: 500;
  color: color.$font-active;
}
</style>
