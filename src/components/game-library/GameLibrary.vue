<template>
  <section class="library__section">
    <h1>My Library</h1>
    <FilterBox
      :options="this.gameLibraries"
      :handleChange="this.onLibraryChange"
    ></FilterBox>
    <div class="game__library__grid">
      <Game v-for="n in 10" :key="n"></Game>
    </div>
  </section>
</template>

<script>
import Game from "./Game";
import FilterBox from "../inputs/FilterBox";
import { GAME_LIBRARIES } from "../../configs"; // replace later with response from backend
export default {
  name: "GameLibrary",
  components: { Game, FilterBox },
  data() {
    return {
      gameLibraries: GAME_LIBRARIES, // replace this part too
    };
  },

  methods: {
    onLibraryChange(libraryName) {
      console.log(libraryName);
    },
  },
};
</script>

<style lang="scss" scoped>
.library__section {
  padding: 2rem 4rem;

  .game__library__grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-evenly;
    gap: 3.6rem;
  }
}
</style>
