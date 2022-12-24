<template>
  <div class="carousel__wrapper">
    <vueper-slides
      v-if="this.gameImages"
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

export default {
  name: "GameGallery",
  props: ["gameVideos", "gameImages"],
  components: { VueperSlides, VueperSlide },
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
