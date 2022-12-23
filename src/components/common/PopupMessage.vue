<template>
  <div class="modal__container">
    <span v-if="!this.markerBoolean" class="error__mark"
      ><font-awesome-icon icon="fa-solid fa-circle-xmark"
    /></span>

    <span v-else class="correct__mark"
      ><font-awesome-icon icon="fa-solid fa-circle-check"
    /></span>
    <h2 class="modal__message">{{ messageContent }}</h2>
  </div>
</template>

<script>
export default {
  name: "PopupMessage",
  props: ["messageContent", "markerBoolean"],
};
</script>

<style lang="scss" scoped>
.modal__container {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  max-width: 500px;
  background-color: rgb(233, 233, 233);
  z-index: 1;
  padding: 1.4rem;
  border-radius: 0 0 2rem 2rem;
  @include mixin.box-shadow();

  span {
    font-size: 2.4rem;
    margin-right: 1rem;
  }

  .error__mark {
    color: color.$font-error;
  }

  .correct__mark {
    color: color.$font-tertiary;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: rgb(94, 94, 94);
  }
}
</style>
