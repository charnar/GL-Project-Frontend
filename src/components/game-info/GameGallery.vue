<template>
  <vueper-slides
    v-if="this.gameImages"
    class="no-shadow carousel__thumbnails"
    :visible-slides="3"
    :arrows="false"
    slide-multiple
    :slide-ratio="1 / 6"
    :dragging-distance="150"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    bullets-outside
  >
    <vueper-slide
      v-for="gameImage in gameImages"
      :key="gameImage.name"
      :image="gameImage.screenshot_url"
    />
  </vueper-slides>
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
.carousel__thumbnails {
  .vueperslide {
    border: 3px solid #fff;
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
