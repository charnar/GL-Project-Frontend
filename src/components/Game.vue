<template>
  <div class="game__card">
    <h2>Game Information goes here</h2>
  </div>
</template>

<script>
export default {
  name: "Game",
};
</script>

<style lang="scss">
.game__card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: color.$profile-icon-bg;
  height: 400px;
  border-radius: 10px;
  text-align: center;
}
</style>
