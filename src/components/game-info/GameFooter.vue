<template>
  <div class="game__info__footer">
    <!-- <div class="features__container">
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
    </div> -->
    <div class="details__container">
      <h2>Game Details</h2>

      <table class="details__table">
        <!-- <tr class="detail__heading">
          <td class="detail__name">Genre</td>
          <td class="detail__info">Simulation - Role-playing - Managerial</td>
        </tr>

        <tr class="detail__heading">
          <td class="detail__name">Tags</td>
          <td class="detail__info">
            Indie, 2D, Great Soundtrack, Open World, Multiplayer, show 11
          </td>
        </tr>

        <tr class="detail__heading">
          <td class="detail__name">Works on</td>
          <td class="detail__info">Simulation - Role-playing - Managerial</td>
        </tr> -->

        <tr class="detail__heading">
          <span>
            <td class="detail__name">Release date</td>
            <td class="detail__info">{{ this.releaseDate }}</td>
          </span>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameFooter",
  props: ["releaseDate"],
};
</script>

<style lang="scss" scoped>
.game__info__footer {
  display: flex;

  .features__container,
  .details__container {
    display: flex;
    flex: 50%;
    flex-direction: column;
  }

  .features__container {
    margin-right: 1rem;
  }

  .features__list {
    margin-left: 1.6rem;
    font-size: 1.6rem;
    color: color.$font-description;

    li {
      margin-bottom: 1.6rem;
    }
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .highlighted__string {
    color: color.$font-tertiary;
  }

  .details__table {
    width: 100%;
    font-size: 1.6rem;

    td {
      padding-bottom: 1rem;
      vertical-align: top;
    }

    .detail__name {
      color: color.$font-tertiary;
      font-weight: 500;
      &::after {
        content: ":";
      }
    }
    .detail__info {
      padding-left: 1.6rem;
      color: color.$font-description;
    }
  }
}

@media only screen and (max-width: 640px) {
  .game__info__footer {
    flex-direction: column;

    .features__container,
    .details__container {
      margin: 0;
    }

    .details__container {
      margin-top: 1.6rem;
    }
  }
}
</style>
