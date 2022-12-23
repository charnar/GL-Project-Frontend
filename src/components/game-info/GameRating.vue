<template>
  <span v-if="this.ratingRaw === 0" class="placeholder__text"
    >Not Available</span
  >
  <div v-else class="game__rating">
    <span
      v-if="this.filledStars"
      v-for="star of this.filledStars"
      class="star__icon star__active"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span
      v-if="this.blankStars"
      v-for="star of this.blankStars"
      class="star__icon star__inactive"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span class="rating__text">{{ this.get_rating(this.ratingRaw) }} / 5</span>
  </div>
</template>

<script>
export default {
  name: "GameRating",
  props: ["ratingRaw"],

  data() {
    return {
      starRating: 0,
      ratingMax: 5,
      filledStars: 0,
      blankStars: 0,
    };
  },

  methods: {
    get_rating(ratingRaw) {
      // Convert to star rating system (out of 5)
      this.starRating = Number((ratingRaw / 100) * 5).toFixed(1);

      // Find the number of stars to fill in
      this.filledStars = Math.floor(this.starRating);
      this.blankStars = Math.ceil(this.ratingMax - this.starRating);
      return this.starRating;
    },
  },
};
</script>

<style lang="scss" scoped>
.star__icon {
  font-size: 1.6rem;
  margin-right: 0.4rem;
}
.star__active {
  color: #f3be00;
}

.star__inactive {
  color: #4b4b4b;
}

.rating__text {
  margin-left: 1rem;
  font-size: 1.6rem;
  font-weight: 300;
}

.placeholder__text {
  font-size: 1.6rem;
  font-weight: 300;
}
</style>
