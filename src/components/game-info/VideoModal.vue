<template>
  <div v-if="this" class="modal__window" @click="closeModal">
    <div class="video__container">
      <iframe :src="this.getVideoLink" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "VideoModal",
  computed: {
    ...mapGetters(["getVideoLink"]),
  },
  methods: {
    ...mapActions(["updateVideoLink"]),
    closeModal(e) {
      this.updateVideoLink("");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__window {
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);

  .video__container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    max-width: 1000px;
    height: 60%;
    transform: translate(-50%, -50%);

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
