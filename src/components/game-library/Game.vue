<template>
  <div class="game__card">
    <div class="game__image">
      <img
        src="https://store-images.s-microsoft.com/image/apps.44413.65985311967005000.4f51b5e9-febf-4990-8951-33ba59b634c9.924253ef-36b2-4cc0-8bb1-9a97c88d4828"
        alt=""
      />
    </div>

    <div class="game__info">
      <h1>Stardew Valley</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
};
</script>

<style lang="scss">
.game__card {
  background: #21242d;
  width: 22rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.game__image {
  width: 100%;
  height: 24rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

.game__info {
  padding: 2rem 1.4rem;
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    margin-top: 1rem;
    color: color.$font-description;
    font-size: 1.4rem;
    font-weight: 600;
  }
}
</style>
