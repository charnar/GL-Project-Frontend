<template>
  <header>
    <span class="logo">
      <router-link class="logo" to="/">
        <img src="../assets/img/logo.svg" />
      </router-link>
    </span>

    <nav>
      <ul class="nav__links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/login">Logout</router-link>
        </li>
      </ul>
    </nav>

    <span class="profile__logo">
      <img src="../assets/img/vue_logo.png" alt="" />
    </span>
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
    height: 100%;
  }
}

.profile__logo {
  background: color.$profile-icon-bg;
  height: 5.6rem;
  border-radius: 100%;
  padding: 1.2rem;
  overflow: hidden;

  img {
    height: 100%;
  }
}

.nav__links {
  list-style: none;
  padding: 0 1.8rem;
  li {
    display: inline-block;
    padding: 0 1.8rem;
    font-size: 1.6rem;

    a {
      text-decoration: none;
      color: color.$font-secondary;

      &.router-link-exact-active {
        color: color.$font-tertiary;
        border-bottom: 1px solid color.$font-tertiary;
      }
    }
  }
}
</style>
