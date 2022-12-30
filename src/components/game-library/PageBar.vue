<template>
  <div class="page__bar__container" @click="handlePageBarClick">
    <ul class="page__bar">
      <!-- <li class="page__btn">
        {{ this.getCurrentPage - 2 > 0 ? `${this.getCurrentPage - 2}` : "" }}
      </li>
      <li class="page__btn">
        {{ this.getCurrentPage - 1 > 0 ? `${this.getCurrentPage - 1}` : "" }}
      </li>
      <li class="page__btn page__active">{{ this.getCurrentPage }}</li>
      <li class="page__btn">
        {{
          this.getCurrentPage + 1 <= this.getNumPages
            ? `${this.getCurrentPage + 1}`
            : ""
        }}
      </li>
      <li class="page__btn">
        {{
          this.getCurrentPage + 2 <= this.getNumPages
            ? `${this.getCurrentPage + 2}`
            : ""
        }}
      </li> -->

      <template v-if="currentPage <= 3">
        <li
          v-if="this.numPages < this.displayPages"
          class="page__btn"
          v-for="page in this.numPages"
          :class="{ page__active: currentPage === page }"
        >
          {{ page }}
        </li>

        <li
          v-else
          class="page__btn"
          v-for="page in this.displayPages"
          :class="{ page__active: currentPage === page }"
        >
          {{ page }}
        </li>
      </template>

      <template v-else>
        <li
          v-if="this.currentPage === this.numPages - 2"
          class="page__btn"
          v-for="page in this.displayPages"
          :class="{ page__active: currentPage === page + (currentPage - 3) }"
        >
          {{ page + (currentPage - 3) }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { DISPLAY_PAGES } from "@/configs.js";
import { mapGetters } from "vuex";
export default {
  name: "PageBar",
  props: ["currentPage", "numPages", "handler"],

  data() {
    return {
      displayPages: DISPLAY_PAGES,
    };
  },

  computed: {
    ...mapGetters(["getCurrentPage", "getNumPages"]),
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
