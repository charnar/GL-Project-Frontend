<template>
  <div class="game__rating">
    <span class="star__icon star__active"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span class="star__icon star__active"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span class="star__icon star__active"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span class="star__icon star__active"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span class="star__icon star__inactive"
      ><font-awesome-icon icon="fa-solid fa-star" />
    </span>

    <span class="rating__text">4.0 / 5</span>
  </div>
</template>

<script>
export default {
  name: "GameRating",
  props: ["ratings"],
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
</style>
