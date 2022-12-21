<template>
  <div
    :data-game-id="gameInfo.personal_game_id"
    class="game__card"
    @click="onGameClick"
  >
    <div class="game__image">
      <img :src="gameInfo.picture_url" @error="setPlaceholderImg" />
    </div>

    <div class="game__info">
      <div class="game__heading">
        <h1>{{ gameInfo.game_name }}</h1>
        <span class="favorite__btn">
          <font-awesome-icon
            :class="{ favorite__active: gameInfo.favorite }"
            icon="fa-solid fa-heart"
          />
        </span>
      </div>

      <p>{{ gameInfo.summary }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ["gameInfo"],

  methods: {
    async toggleFavorites() {
      // 1. Send a PUT Request to update favorite status
      // 2. Update favorite status on UI
    },
    onGameClick(e) {
      if (e.target.parentElement.closest(".favorite__btn"))
        this.toggleFavorites();
      else this.$router.push(`/game/${this.$el.getAttribute("data-game-id")}`);
    },

    setPlaceholderImg(event) {
      event.target.src = require("@/assets/img/card_placeholder.jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
.game__card {
  background: color.$game-card;
  border-radius: 10px;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
}

.game__heading {
  display: flex;
  justify-content: space-between;

  span {
    color: color.$font-inactive;

    &:hover {
      transform: scale(1.25);
    }
  }
}

.favorite__active {
  color: color.$font-error;
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
  h1,
  .game__heading > span {
    font-size: 2rem;
    font-weight: 500;
  }

  h1 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 0.4rem;
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
