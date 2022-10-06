<template>
  <div class="library__bar" @click="onClick">
    <button
      class="library__button"
      v-for="library in libraries"
      :key="library"
      :class="{
        library__button__active: currentLibrary === library,
      }"
    >
      {{ library }}
    </button>
  </div>
</template>

<script>
export default {
  name: "LibraryBar",
  props: ["libraries", "handleChange", "currentLibrary"],
  methods: {
    onClick(e) {
      if (e.target.classList.contains("library__button")) {
        // Remove active class from all buttons
        // const libraryButtons = document.querySelectorAll(".library__button");
        // libraryButtons.forEach((btn) =>
        //   btn.classList.remove("library__button__active")
        // );
        // e.target.classList.add("library__button__active");

        // Bubble value back to GameLibrary Component
        this.handleChange && this.handleChange(e.target.innerText);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.library__button {
  background: transparent;
  color: color.$font-inactive;
  margin: 0 2.6rem;
  font-size: 1.6rem;
}

.library__bar {
  padding: 1.4rem 0;

  :first-child {
    margin-left: 0;
  }
}

.library__button__active {
  color: color.$font-active;
  border-bottom: 1px solid;
}
</style>
