<template>
  <div class="form__container">
    <form novalidate ref="loginForm" @submit="onLoginPressed">
      <div class="input__box">
        <input
          type="text"
          id="login-username-email"
          autocomplete="off"
          required
        />
        <span>Username/Email</span>
      </div>

      <div class="input__box">
        <input type="password" id="login-passwd" required />
        <span>Password</span>
      </div>

      <div class="input__box">
        <input type="submit" value="Log In" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  methods: {
    ...mapActions(["checkLogin"]),
    // triggers when the form is submitted
    onLoginPressed(e) {
      e.preventDefault();
      this.checkLogin();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_form.scss";
</style>
