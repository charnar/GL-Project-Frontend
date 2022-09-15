<template>
  <section>
    <h1>My Library</h1>
    <div game__library__grid>
      <Game></Game>
      <Game></Game>
      <Game></Game>
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
.game__library__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 2rem;
}
</style>
