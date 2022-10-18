<template>
  <div class="page__bar__container" @click="handlePageBarClick">
    <ul class="page__bar">
      <li
        class="page__btn"
        v-for="page in numPages"
        :key="page"
        :class="{ page__active: currentPage === page }"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageBar",
  props: ["currentPage", "numPages", "handler"],
  methods: {
    handlePageBarClick(e) {
      if (e.target.classList.contains("page__btn"))
        this.handler && this.handler(e.target.innerText);
    },
  },
};
</script>

<style lang="scss" scoped>
.page__bar__container {
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    li {
      font-size: 1.6rem;
      display: inline-block;
      margin: 0 1.4rem;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .page__active {
    text-underline-offset: 0.4rem;
    color: color.$font-active;
    text-decoration: 1px underline;
  }
}
</style>
