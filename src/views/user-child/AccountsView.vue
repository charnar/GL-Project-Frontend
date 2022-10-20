<template>
  <section class="section__accounts">
    <h1 class="services__container__heading">Add Account</h1>
    <div class="services__container">
      <AccountItem
        v-for="account in accountServices"
        :key="account.name"
        :serviceIcon="account.image"
        :serviceLink="account.link"
      ></AccountItem>
    </div>
    <h2 class="linked__container__heading">Linked Accounts</h2>
    <div class="linked__container">
      <AccountItem
        v-for="account in accountServices"
        :key="account.name"
        :serviceIcon="account.image"
        :serviceLink="account.link"
      ></AccountItem>
    </div>
  </section>
</template>

<script>
import AccountItem from "@/components/users/AccountItem";
import { ACCOUNT_SERVICES } from "@/configs";
export default {
  name: "AccountsView",
  data() {
    return {
      accountServices: ACCOUNT_SERVICES,
    };
  },

  components: {
    AccountItem,
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
