<template>
  <section class="library__section">
    <SearchBox
      :currentSearch="this.getSearchValue"
      :handler="this.onSearchChange"
    ></SearchBox>
    <!-- Render only if user linked more than 1 library -->

    <div class="filter__bar">
      <LibraryBar
        v-if="this.getGameLibraries.length > 2"
        :libraries="this.getGameLibraries"
        :handler="this.onLibraryChange"
        :currentLibrary="this.getLibraryFilter"
      ></LibraryBar>

      <FilterBox :options="this.filters"></FilterBox>
    </div>

    <div class="game__library__grid">
      <Game
        v-for="game in this.getDisplayGames"
        :key="game"
        :gameInfo="game"
      ></Game>
    </div>
  </section>
</template>

<script>
import Game from "./Game";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import FilterBox from "../ui/FilterBox";
import LibraryBar from "./LibraryBar";
import SearchBox from "../ui/SearchBox";
import { getLibraryGames } from "@/helper.js";
import { JSON_API_URL } from "@/configs"; // replace later with response from backend
export default {
  name: "GameLibrary",
  components: { Game, LibraryBar, SearchBox, FilterBox },
  data() {
    return {
      games: [],
      filters: ["A-Z", "Favorites", "Date purchased", "Recently played"],
    };
  },

  computed: {
    ...mapGetters([
      "getLibraryFilter",
      "getSearchValue",
      "getGameLibraries",
      "getDisplayGames",
    ]),
  },

  methods: {
    ...mapActions([
      "updateLibraryFilter",
      "updateSearchValue",
      "updateGames",
      "updateGameLibraries",
      "updateDisplayGames",
    ]),
    onLibraryChange(libraryName) {
      this.updateLibraryFilter(libraryName);
    },

    onSearchChange(searchVal) {
      this.updateSearchValue(searchVal);
    },

    async fetchAllGames() {
      try {
        const libraryGames = await axios.get(
          `${JSON_API_URL}/all-library-games` // replace this later
        );

        const [gameLibraries, games] = getLibraryGames(libraryGames.data);
        this.updateGameLibraries(gameLibraries);
        this.updateGames(games);
        this.updateDisplayGames(games);
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    await this.fetchAllGames();
  },
};
</script>

<style lang="scss" scoped>
$width: 240px;

.library__section {
  padding: 2rem 4rem;
  max-width: $width * 6;
  margin: 0 auto;

  .game__library__grid {
    width: auto;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, $width);
    margin: 2rem auto;
    gap: 2rem;
  }

  .filter__bar {
    display: flex;
    justify-content: space-between;
  }
}
</style>
