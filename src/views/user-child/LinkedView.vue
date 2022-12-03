<template>
  <h1>You have successfully linked your Steam Account!</h1>
</template>

<script>
import { mapGetters } from "vuex";
import { API_URL } from "@/configs.js";
import axios from "axios";
export default {
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

      console.log(payload);
      const response = await axios.post(`${API_URL}/register-library`, payload);
      console.log(response.data);
      this.$router.push("/user/accounts");
    } catch (err) {
      console.error("Something went wrong...");
    }
  },
};
</script>

<style lang="scss" scoped></style>
