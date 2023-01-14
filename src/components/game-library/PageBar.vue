<template>
  <div class="page__bar__container" @click="handlePageBarClick">
    <ul class="page__bar">
      <template v-if="numPages <= this.displayPages">
        <li
          class="page__btn"
          v-for="page in numPages"
          :key="page"
          :class="{ page__active: currentPage === page }"
        >
          {{ page }}
        </li>
      </template>

      <template v-else>
        <template v-if="currentPage >= numPages - this.pageEndRange">
          <li
            class="page__btn"
            v-for="page in this.displayPages"
            :key="page"
            :class="{
              page__active:
                currentPage ===
                numPages - this.pageEndRange + (page - this.pageEndRange) - 1,
            }"
          >
            {{ numPages - this.pageEndRange + (page - this.pageEndRange) - 1 }}
          </li>
        </template>

        <template v-else>
          <template v-if="currentPage <= 3">
            <li
              class="page__btn"
              v-for="page in this.displayPages"
              :key="page"
              :class="{ page__active: currentPage === page }"
            >
              {{ page }}
            </li>
          </template>

          <li
            v-else
            class="page__btn"
            v-for="page in this.displayPages"
            :key="page"
            :class="{
              page__active:
                currentPage === currentPage + (page - this.pageEndRange - 1),
            }"
          >
            {{ currentPage + (page - this.pageEndRange - 1) }}
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>

<script>
import { DISPLAY_PAGES } from "@/configs.js";
export default {
  name: "PageBar",
  props: ["currentPage", "numPages", "handler"],

  data() {
    return {
      displayPages: DISPLAY_PAGES,
    };
  },

  computed: {
    pageEndRange() {
      return Math.floor(this.displayPages / 2);
    },
  },
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
