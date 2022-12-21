<template>
  <header>
    <NavigationBack v-if="this.checkRouteName"></NavigationBack>
    <NavigationBar v-else></NavigationBar>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavigationBar from "../ui/NavigationBar";
import NavigationBack from "../ui/NavigationBack";
export default {
  name: "TheHeader",
  data() {
    return {
      altRoutes: ["GameInfo"],
    };
  },
  components: {
    NavigationBar,
    NavigationBack,
  },

  computed: {
    ...mapGetters(["getProfilePicture"]),

    checkRouteName() {
      return this.altRoutes.includes(this.$route.name);
    },

    checkTransactionRouteName() {
      return this.transactionRoutes.includes(this.$route.name);
    },
  },

  methods: {
    ...mapActions(["logoutUser"]),
  },
};
</script>

<style lang="scss" scoped>
header {
  margin: 2rem 4rem;
  height: 6rem;
}
</style>
