<template>
  <div class="message__container">
    <h1>You have successfully linked your library account</h1>
    <h2>Please wait, we are preparing your library</h2>
    <div class="spinner__container">
      <LoadingSpinner></LoadingSpinner>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";

export default {
  name: "LinkedView",
  components: { LoadingSpinner },
  methods: {
    ...mapActions(["processLinkedLibrary"]),
  },

  mounted() {
    const libraryname = this.$route.params.libraryname.toUpperCase();
    let linkedAccountID;
    if (libraryname === "STEAM") {
      linkedAccountID = this.$route.query["openid.identity"].slice(37);
      this.processLinkedLibrary([libraryname, linkedAccountID]);
      // Timeout not needed as we need all the time to process the things
      setTimeout(() => this.$router.push("/"), 5000);
    }
  },
};
</script>

<style lang="scss" scoped>
.message__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  padding: 2rem;
  h1 {
    color: color.$font-tertiary;
  }
  h2 {
    margin-top: 1rem;
    font-size: 2.4rem;
    font-weight: 400;
    color: white;
  }

  .spinner__container {
    height: 50px;
    width: 50px;
  }
}
</style>
