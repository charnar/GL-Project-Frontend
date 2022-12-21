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
import { mapGetters } from "vuex";
import { API_URL } from "@/configs.js";
import axios from "axios";
import LoadingSpinner from "@/components/ui/LoadingSpinner.vue";
export default {
  name: "LinkedView",
  components: { LoadingSpinner },
  computed: {
    ...mapGetters(["getSessionID"]),
  },
  async mounted() {
    try {
      const linkedAccountID = this.$route.query["openid.identity"].slice(37);
      console.log(this.getSessionID);
      const payload = {
        session_id: this.getSessionID,
        library_type: "STEAM",
        library_api_key: linkedAccountID,
      };
      // console.log(payload);
      // Timeout not needed as we need all the time to process the things
      const response = await axios.post(`${API_URL}/register-library`, payload);
      console.log(response.data);
      this.$router.push("/");
    } catch (err) {
      console.error("Something went wrong...");
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
  height: 100vh;
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
