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

<style lang="scss" scoped>
$width: 240px;
.game__library__grid {
  width: auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, $width);
  margin: 2rem auto;
  gap: 2rem;
}
</style>
