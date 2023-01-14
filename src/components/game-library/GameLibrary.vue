<template>
  <section class="section__library">
    <div class="top__filter__bar">
      <SearchBox
        :currentSearch="this.getSearchValue"
        :handler="this.onSearchChange"
      ></SearchBox>

      <ButtonRefresh :handler="this.onRefreshClick"></ButtonRefresh>
    </div>

    <div v-if="this.getGameLibraries.length > 1" class="bottom__filter__bar">
      <LibraryBar
        :libraries="this.getGameLibraries"
        :handler="this.onLibraryChange"
        :currentLibrary="this.getLibraryFilter"
      ></LibraryBar>

      <SortDropdown></SortDropdown>
    </div>

    <LibraryGrid
      v-if="this.hasGames"
      :libraryGames="this.getDisplayGames"
    ></LibraryGrid>

    <div v-else class="message__box">
      <h1>
        {{
          this.getGameLibraries.length <= 1
            ? "You currently don't have any registered game libraries!"
            : this.getSearchValue === ""
            ? "We couldn't find any games in your library"
            : "We couldn't find what you were looking for"
        }}
      </h1>

      <button
        v-if="this.getGameLibraries.length <= 1"
        class="link__account__btn"
        @click="this.$router.push('/user/accounts')"
      >
        Add Library Accounts
      </button>
    </div>

    <PageBar
      v-if="this.getNumPages > 1"
      :currentPage="this.getCurrentPage"
      :numPages="this.getNumPages"
      :handler="this.onPageChange"
    ></PageBar>
  </section>
</template>

<script>
import LibraryGrid from "./LibraryGrid";
import SortDropdown from "../ui/SortDropdown";
import LibraryBar from "./LibraryBar";
import SearchBox from "../ui/SearchBox";
import PageBar from "./PageBar";
import ButtonRefresh from "../ui/ButtonRefresh";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GameLibrary",
  components: {
    LibraryBar,
    SearchBox,
    SortDropdown,
    PageBar,
    ButtonRefresh,
    LibraryGrid,
  },
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
      "getCurrentPage",
      "getNumPages",
    ]),
    hasGames: function () {
      return this.getDisplayGames.length;
    },
  },

  methods: {
    ...mapActions([
      "updateLibraryFilter",
      "updateSearchValue",
      "updateGames",
      "updateGameLibraries",
      "updateCurrentPage",
    ]),
    onLibraryChange(libraryName, libraryID) {
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
      } catch (err) {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_components.scss";

$width: 240px;

.section__library {
  max-width: ($width * 5) + (32px * 5);
  margin: 0 auto;

  .top__filter__bar,
  .bottom__filter__bar {
    display: flex;
    align-items: center;
  }

  .bottom__filter__bar {
    justify-content: space-between;
  }
}

.message__box {
  text-align: center;
  padding: 4rem;
}

.link__account__btn {
  transition: transform 0.2s ease-out;
  margin-top: 2rem;
  padding: 1.8rem 6rem;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 1rem;
  @extend .btn__active;

  &:hover {
    transform: translate(0, -5px);
  }
}
</style>
