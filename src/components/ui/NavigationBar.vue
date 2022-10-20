<template>
  <div class="navigation__header">
    <span class="logo">
      <router-link class="logo" to="/">
        <img src="@/assets/img/logo.svg" />
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
          <router-link to="/user/userid/accounts">Accounts</router-link>
        </li>

        <li>
          <a @click="logoutUser">Logout</a>
        </li>
      </ul>
    </nav>

    <span class="profile__logo">
      <img :src="this.getProfilePicture" alt="" />
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavigationBar",

  computed: {
    ...mapGetters(["getProfilePicture"]),
  },

  methods: {
    ...mapActions(["logoutUser"]),
  },
};
</script>

<style lang="scss" scoped>
.navigation__header {
  display: flex;
  align-items: center;
  height: inherit;
}

.logo {
  height: inherit;
  margin-right: auto;

  img {
    height: 100%;
  }
}

.profile__logo {
  background: color.$profile-icon-bg;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: inherit;
    object-fit: cover;
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
      color: color.$font-inactive;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      transition: all 0.2s;

      &.router-link-exact-active {
        color: color.$font-tertiary;
        border-bottom: 1px solid color.$font-active;
      }
    }
  }
}
</style>
