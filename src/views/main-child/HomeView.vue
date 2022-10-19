<template>
  <div class="main__container">
    <LoadingSpinner v-if="loadingFlag"></LoadingSpinner>
    <GameLibrary v-else></GameLibrary>
  </div>
</template>

<script>
import GameLibrary from "@/components/game-library/GameLibrary";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { GameLibrary, LoadingSpinner },

  methods: {
    ...mapActions(["updateGames"]),
  },

  computed: {
    ...mapGetters(["getDisplayGames"]),
  },

  data() {
    return {
      loadingFlag: true,
    };
  },

  async mounted() {
    try {
      await this.updateGames();
      this.loadingFlag = false;
    } catch (err) {
      console.error(err);
      this.loadingFlag = false;
    }
  },
};
</script>

<style lang="scss" scoped></style>
