<template>
  <section class="library__section">
    <div class="top__filter__bar">
      <SearchBox
        :currentSearch="this.getSearchValue"
        :handler="this.onSearchChange"
      ></SearchBox>

      <ButtonRefresh :handler="this.onRefreshClick"></ButtonRefresh>
    </div>

    <div class="bottom__filter__bar">
      <!-- Render only if user linked more than 1 library -->
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

    <PageBar
      :currentPage="this.getCurrentPage"
      :numPages="this.getNumPages"
      :handler="this.onPageChange"
    ></PageBar>
  </section>
</template>

<script>
import Game from "./Game";
import { mapGetters, mapActions } from "vuex";
import FilterBox from "../ui/FilterBox";
import LibraryBar from "./LibraryBar";
import SearchBox from "../ui/SearchBox";
import PageBar from "./PageBar";
import ButtonRefresh from "../ui/ButtonRefresh";

export default {
  name: "GameLibrary",
  components: {
    Game,
    LibraryBar,
    SearchBox,
    FilterBox,
    PageBar,
    ButtonRefresh,
  },
  data() {
    return {
      games: [],
      filters: ["A-Z", "Favorites", "Date purchased", "Recently played"],
      spinFlag: false,
    };
  },

  computed: {
    ...mapGetters([
      "getLibraryFilter",
      "getSearchValue",
      "getGameLibraries",
      "getDisplayGames",
      "getCurrentPage",
      "getNumPages",
    ]),
  },

  methods: {
    ...mapActions([
      "updateLibraryFilter",
      "updateSearchValue",
      "updateGames",
      "updateGameLibraries",
      "updateCurrentPage",
    ]),
    onLibraryChange(libraryName) {
      this.updateLibraryFilter(libraryName);
    },

    onSearchChange(searchVal) {
      this.updateSearchValue(searchVal);
    },

    onPageChange(page) {
      this.updateCurrentPage(page);
    },

    async onRefreshClick() {
      try {
        await this.updateGames();
      } catch (err) {
        console.error(err);
      }
    },
  },

  async mounted() {
    try {
      this.spinFlag = true;
      await this.updateGames();

      this.spinFlag = false;
    } catch (err) {
      console.error(err);
      this.spinFlag = false;
    }
  },
};
</script>

<style lang="scss" scoped>
$width: 240px;

.library__section {
  padding: 2rem 4rem;
  max-width: ($width * 6) + (30px * 6);
  margin: 0 auto;

  .game__library__grid {
    width: auto;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, $width);
    margin: 2rem auto;
    gap: 2rem;
  }

  .top__filter__bar,
  .bottom__filter__bar {
    display: flex;
    align-items: center;
  }
}
</style>
