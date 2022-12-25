<template>
  <div class="carousel__wrapper">
    <vueper-slides
      v-if="this.gameImages || this.gameVideos"
      class="no-shadow carousel__thumbnails"
      lazy
      :visible-slides="3"
      :arrows="false"
      slide-multiple
      fixed-height="200px"
      :dragging-distance="100"
      :breakpoints="{
        1200: { visibleSlides: 2, slideMultiple: 2 },
        800: { visibleSlides: 1, slideMultiple: 1 },
      }"
      bullets-outside
    >
      <vueper-slide
        v-for="gameVideo in gameVideos.slice(0, 2)"
        :key="gameVideo.name"
        :video="`https://www.youtube.com/embed/${gameVideo.video_id}`"
        @click.native="handleVideoClick(gameVideo.video_id)"
      />
      <vueper-slide
        v-for="gameImage in gameImages"
        :key="gameImage.name"
        :image="gameImage.screenshot_url"
        :video="gameImage.video_id"
      />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { mapActions } from "vuex";

export default {
  name: "GameGallery",
  props: ["gameVideos", "gameImages"],
  components: { VueperSlides, VueperSlide },
  methods: {
    ...mapActions(["updateVideoLink"]),

    handleVideoClick(video_id) {
      this.updateVideoLink(`https://www.youtube.com/embed/${video_id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_components.scss";

.carousel__wrapper {
  margin-bottom: 6rem;
}
.carousel__thumbnails {
  .vueperslide {
    border: 3px solid #fff;
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
