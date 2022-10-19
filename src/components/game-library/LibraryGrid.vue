<template>
  <div class="game__library__grid">
    <GameCard
      v-for="game in libraryGames"
      :key="game"
      :gameInfo="game"
    ></GameCard>
  </div>
</template>

<script>
import GameCard from "./GameCard";
export default {
  name: "LibraryGrid",
  props: ["libraryGames"],
  components: { GameCard },
};
</script>

<style lang="scss" scoped></style>
