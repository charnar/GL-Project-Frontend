<template>
  <section class="library__section">
    <h1>My Library</h1>
    <!-- Render only if user linked more than 1 library -->
    <LibraryBar
      v-if="this.gameLibraries.length > 2"
      :libraries="this.gameLibraries"
      :handleChange="this.onLibraryChange"
      :currentLibrary="this.getLibraryFilter"
    ></LibraryBar>

    <div class="game__library__grid">
      <Game v-for="n in 10" :key="n"></Game>
    </div>
  </section>
</template>

<script>
import Game from "./Game";
import { mapGetters, mapActions } from "vuex";
import FilterBox from "../inputs/FilterBox";
import LibraryBar from "./LibraryBar";
import { GAME_LIBRARIES } from "@/configs"; // replace later with response from backend
export default {
  name: "GameLibrary",
  components: { Game, FilterBox, LibraryBar },
  data() {
    return {
      gameLibraries: GAME_LIBRARIES, // replace this part too
    };
  },

  computed: {
    ...mapGetters(["getLibraryFilter"]),
  },

  methods: {
    ...mapActions(["changeLibraryFilter"]),
    onLibraryChange(libraryName) {
      this.changeLibraryFilter(libraryName);
    },
  },
};
</script>

<style lang="scss" scoped>
$width: 220px;

.library__section {
  padding: 2rem 4rem;
  max-width: $width * 6;
  margin: 0 auto;

  .game__library__grid {
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax($width, 1fr));
    justify-items: center;
    margin: 2rem auto;
    column-gap: 2rem;
    row-gap: 4rem;
  }
}
</style>
