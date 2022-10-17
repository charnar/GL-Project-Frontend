<template>
  <div>
    <h1>Game Information here</h1>
  </div>
</template>

<script>
import axios from "axios";
import { JSON_API_URL } from "@/configs.js";
export default {
  name: "GameView",

  methods: {
    async fetchGameInfo() {
      const response = await axios.post(`${JSON_API_URL}/game-info`, {
        session_id: "",
        game_id: this.$route.params.id,
      });

      console.log(response.data);
    },
  },

  async beforeMount() {
    await this.fetchGameInfo();
  },
};
</script>

<style lang="scss" scoped></style>
