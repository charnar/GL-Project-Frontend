<template>
  <section class="section__accounts">
    <h1 class="services__container__heading">Add Account</h1>

    <div class="services__container">
      <component
        v-for="component in this.unlinkedServices"
        v-bind:is="component"
        :disableFlag="this.processingLibrary"
        @click="handleClick"
      ></component>
    </div>

    <h2 class="linked__container__heading">Connected accounts</h2>
    <div class="linked__container">
      <component
        v-for="component in this.linkedServices"
        v-bind:is="component"
        :disableFlag="true"
      ></component>
    </div>
  </section>
</template>

<script>
import SteamService from "@/components/users/SteamService";
import XboxService from "@/components/users/XboxService";
import GOGService from "@/components/users/GOGService";
import OriginService from "@/components/users/OriginService";
import EpicService from "@/components/users/EpicService";
import { API_URL, ACCOUNT_SERVICES } from "@/configs";
import { getLinkedLibraries } from "@/helper";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "AccountsView",

  data() {
    return {
      linkedServices: [],
      unlinkedServices: [],
    };
  },
  components: {
    SteamService,
    GOGService,
    OriginService,
    EpicService,
    XboxService,
  },

  computed: {
    ...mapGetters(["getSessionID", "getLibraryProcess"]),

    processingLibrary() {
      return this.getLibraryProcess !== "AVAILABLE";
    },
  },

  methods: {
    ...mapActions(["checkSessionStatus", "updateModalMessage"]),

    handleClick(e) {
      console.log("CLiked!");
      if (this.processingLibrary) {
        this.updateModalMessage([
          "Please wait until your library has been fully processed",
        ]);
      }
    },
  },

  async mounted() {
    try {
      const payload = { session_id: this.getSessionID };
      const response = await axios.post(`${API_URL}/all-libraries`, payload);
      this.checkSessionStatus(response.data.status);
      const userLinkedServices = getLinkedLibraries(response.data.libraries);

      ACCOUNT_SERVICES.forEach((service) => {
        userLinkedServices.includes(service.name)
          ? this.linkedServices.push(service.component_name)
          : this.unlinkedServices.push(service.component_name);
      });
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style lang="scss" scoped>
.services__container,
.linked__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 84px);
  gap: 4rem;
  margin: 1rem 0;
}

.linked__container {
  padding: 2.6rem;
  background: rgba(100, 100, 100, 0.1);
  border-radius: 1rem;
}

.linked__container__heading {
  margin-top: 4rem;
  font-weight: 500;
  color: color.$font-active;
}
</style>
