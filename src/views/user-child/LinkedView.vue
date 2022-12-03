<template>
  <h1>You have successfully linked your Steam Account!</h1>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async mounted() {
    try {
      const linkedAccountID = this.$route.query["openid.identity"].slice(37);
      console.log(this.getSessionID);
      this.$router.push("/user/accounts");
    } catch (err) {
      console.error("Something went wrong...");
    }
  },

  computed: {
    ...mapGetters(["getSessionID"]),
  },
};
</script>

<style lang="scss" scoped></style>
