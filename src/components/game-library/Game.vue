<template>
  <div class="game__card">
    <div class="game__image">
      <img :src="gameInfo.picture_url" />
    </div>

    <div class="game__info">
      <h1>{{ gameInfo.game_name }}</h1>
      <p>{{ gameInfo.game_description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ["gameInfo"],
};
</script>

<style lang="scss" scoped>
.game__card {
  background: #21242d;
  width: 26rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.game__image {
  height: 34rem;
  overflow: hidden;

  img {
    width: 100%;
    height: inherit;
    object-fit: cover;
    border-radius: 10px;
  }
}

.game__info {
  padding: 2rem 1.4rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    margin-top: 1rem;
    color: color.$font-description;
    font-size: 1.4rem;
    font-weight: 600;
    text-overflow: ellipsis;

    /* Needed to make it work */
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
