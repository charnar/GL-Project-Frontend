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
  props: ["libraries", "handler", "currentLibrary"],
  methods: {
    onClick(e) {
      if (e.target.classList.contains("library__button")) {
        this.handler && this.handler(e.target.innerText);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.library__button {
  background: transparent;
  color: color.$font-inactive;
  margin: 0 2rem;
  font-size: 1.6rem;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
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
