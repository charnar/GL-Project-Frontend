<template>
  <section class="library__section">
    <h1>My Library</h1>
    <div class="game__library__grid">
      <Game v-for="n in 10" :key="n"></Game>
    </div>
  </section>
</template>

<script>
import Game from "./Game";
export default {
  name: "GameLibrary",
  components: { Game },
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
