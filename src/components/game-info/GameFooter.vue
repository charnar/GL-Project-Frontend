<template>
  <div class="game__info__footer">
    <div class="features__container">
      <h2>Features</h2>
      <ul class="features__list">
        <li>
          <span class="highlighted__string"
            >Turn your overgrown field into a lively farm!
          </span>
          Raise animals, grow crops, start an orchard, craft useful machines,
          and more! You'll have plenty of space to create the farm of your
          dreams.
        </li>
        <li>
          <span class="highlighted__string">4 Player Farming!</span> Invite 1-3
          players to join you in the valley online! Players can work together to
          build a thriving farm, share resources, and improve the local
          community. As more hands are better than one, players have the option
          to scale profit margin on produce sold for a more challenging
          experience.
        </li>
      </ul>
    </div>
    <div class="details__container">
      <h2>Game Details</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameFooter",
};
</script>

<style lang="scss" scoped>
.game__info__footer {
  display: flex;

  .features__container,
  .details__container {
    flex: 50%;
  }

  .features__container {
    margin-right: 1rem;
  }

  .details__container {
    margin-left: 1rem;
  }

  .features__list {
    margin-left: 1.6rem;
    font-size: 1.6rem;
    color: color.$font-description;
    li {
      margin: 1.6rem 0;
    }
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 500;
  }

  .highlighted__string {
    color: color.$font-tertiary;
  }
}
</style>
