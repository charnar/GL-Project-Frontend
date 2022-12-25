<template>
  <section class="section__game__info">
    <VideoModal v-if="this.getVideoLink"></VideoModal>
    <div class="game__cover__background">
      <img
        v-if="this.gameInfo"
        :src="this.gameInfo.banner_url"
        alt="Cover Background"
      />
    </div>

    <div class="blank__div"></div>

    <div class="game__info__wrapper">
      <div class="game__header__container">
        <div class="header__left__container">
          <h1 class="game__title">{{ this.gameInfo.game_name }}</h1>
          <GameRating :ratingRaw="this.gameInfo.rating"></GameRating>
        </div>

        <!-- Game Top Info container-->
        <div class="header__right__container">
          <div class="hours__played__container">
            <h3>
              Play time
              <span class="game__hours">{{
                this.gameInfo.total_play_time
              }}</span>
              <span class="favorite__btn favorite__active">
                <font-awesome-icon icon="fa-solid fa-heart" />
              </span>
            </h3>
          </div>
        </div>
      </div>
      <!-- Video/Gallery container goes here WIP -->
      <GameGallery
        :gameImages="this.gameInfo.screenshots"
        :gameVideos="this.gameInfo.videos"
      ></GameGallery>

      <!-- Description container -->
      <div class="game__description__container">
        <h2>Description</h2>
        <p>
          {{ this.gameInfo.summary }}
        </p>
      </div>

      <!-- Description container -->
      <div v-if="gameInfo.storyline" class="game__description__container">
        <h2>Storyline</h2>
        <p>
          {{ this.gameInfo.storyline }}
        </p>
      </div>

      <!-- Features and Game details container -->
      <GameFooter :releaseDate="this.gameInfo.first_release_date"></GameFooter>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import GameRating from "@/components/game-info/GameRating";
import GameFooter from "@/components/game-info/GameFooter";
import GameGallery from "@/components/game-info/GameGallery";
import VideoModal from "@/components/game-info/VideoModal";
import { API_URL } from "@/configs.js";
import { get_release_date, get_time_played } from "@/helper";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "GameView",

  data() {
    return {
      gameInfo: "",
    };
  },
  components: {
    GameRating,
    GameFooter,
    GameGallery,
    VideoModal,
  },

  computed: {
    ...mapGetters(["getSessionID", "getVideoLink"]),
  },

  methods: {
    ...mapActions(["checkSessionStatus"]),
    async fetchGameInfo() {
      try {
        const payload = {
          session_id: this.getSessionID,
          game_id: Number(this.$route.params.gameid),
        };

        const response = await axios.post(`${API_URL}/game-info`, payload);
        const { status, ...gameInfo } = response.data;

        this.checkSessionStatus(status);
        this.gameInfo = gameInfo;

        console.log(gameInfo);
        gameInfo.first_release_date = get_release_date(
          gameInfo.first_release_date
        );

        gameInfo.total_play_time = get_time_played(gameInfo.total_play_time);
      } catch (err) {
        console.log(err);
      }
    },
  },

  async mounted() {
    await this.fetchGameInfo();
  },
};
</script>

<style lang="scss" scoped>
$cover-height: 650px;
$maximum-width: 1400px;

section {
  padding: 0;
}

.game__info__wrapper {
  margin: 0 auto;
  max-width: $maximum-width;
  padding: 4rem 4rem;

  h2 {
    font-size: 2.6rem;
    font-weight: 500;
  }
}
.blank__div {
  height: $cover-height - 100px;
}
.game__cover__background {
  display: block;
  padding: 0;
  height: $cover-height;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.game__header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.2rem;
}

.header__left__container {
  h1 {
    font-size: 3.4rem;
  }
}

.hours__played__container {
  h3 {
    font-size: 1.7rem;
    font-weight: 400;
    color: color.$font-description;

    span {
      font-weight: 800;
      border-radius: 0.4rem;
      padding: 0.6rem 1rem;
      margin-left: 1.2rem;
      @include mixin.holo-box(color.$font-tertiary);
    }

    .favorite__btn {
      @include mixin.holo-box(color.$font-description);

      &:hover {
        cursor: pointer;
      }
    }

    .favorite__active {
      @include mixin.holo-box(color.$font-error);
    }
  }
}

.game__description__container {
  padding-bottom: 3.2rem;

  p {
    margin-top: 1.4rem;
    font-size: 1.6rem;
    color: color.$font-description;
  }
}

@media only screen and (max-width: 640px) {
  .game__header__container {
    flex-direction: column;
    text-align: center;

    .header__left__container {
      margin-bottom: 2rem;
    }
  }
}
</style>
