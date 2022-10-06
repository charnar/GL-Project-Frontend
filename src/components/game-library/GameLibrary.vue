<template>
  <section class="library__section">
    <SearchBox></SearchBox>
    <!-- Render only if user linked more than 1 library -->
    <LibraryBar
      v-if="this.gameLibraries.length > 2"
      :libraries="this.gameLibraries"
      :handleChange="this.onLibraryChange"
      :currentLibrary="this.getLibraryFilter"
    ></LibraryBar>

    <div class="game__library__grid">
      <Game v-for="g in games" :key="g" :gameInfo="g"></Game>
    </div>
  </section>
</template>

<script>
import Game from "./Game";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import FilterBox from "../ui/FilterBox";
import LibraryBar from "./LibraryBar";
import SearchBox from "./SearchBox";
import { getLibraryGames } from "@/helper.js";
import { JSON_API_URL } from "@/configs"; // replace later with response from backend
export default {
  name: "GameLibrary",
  components: { Game, LibraryBar, SearchBox },
  data() {
    return {
      gameLibraries: [], // replace this part too
      games: [],
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

    async fetchGameLibrary() {
      try {
        const libraryGames = await axios.get(
          `${JSON_API_URL}/all-library-games`
        );

        [this.gameLibraries, this.games] = getLibraryGames(libraryGames.data);
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    await this.fetchGameLibrary();
  },
};
</script>

<style lang="scss" scoped>
$width: 260px;

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
