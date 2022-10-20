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

  components: {
    NavigationBar,
    NavigationBack,
  },

  computed: {
    ...mapGetters(["getProfilePicture"]),

    checkRouteName() {
      return this.$route.name === "Accounts" ? true : false;
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
