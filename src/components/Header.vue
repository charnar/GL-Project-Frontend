<template>
  <header>
    <span class="logo">
      <router-link class="logo" to="/">
        <img src="../assets/img/logo.svg" />
      </router-link>
    </span>

    <nav>
      <ul class="nav__links">
        <li>About</li>
        <li>My Games</li>
        <li>Friends</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2rem 2.6rem;
}

.logo {
  height: 6rem;
  margin-right: auto;

  img {
    width: 100%;
    height: 100%;
  }
}

.nav__links {
  list-style: none;
  li {
    display: inline-block;
    padding: 0 1.25rem;
  }
}
</style>
