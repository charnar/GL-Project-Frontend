<template>
  <section class="section__accounts">
    <h1 class="services__container__heading">Add Account</h1>

    <SteamButton :linkedLibraries="this.linkedLibraries"></SteamButton>
  </section>
</template>

<script>
import SteamButton from "@/components/users/SteamButton";
import { API_URL } from "@/configs";
import { getLinkedLibraries } from "@/helper";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "AccountsView",

  data() {
    return {
      linkedLibraries: [],
    };
  },
  components: {
    SteamButton,
  },

  computed: {
    ...mapGetters(["getSessionID"]),
  },

  methods: {
    ...mapActions(["checkSessionStatus"]),
  },

  async mounted() {
    try {
      const payload = { session_id: this.getSessionID };
      const response = await axios.post(`${API_URL}/all-libraries`, payload);

      this.checkSessionStatus(response.data.status);
      this.libraries = getLinkedLibraries(response.data.libraries);
    } catch (err) {
      console.log(err);
    }
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
