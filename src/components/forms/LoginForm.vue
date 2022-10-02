<template>
  <div class="form__container">
    <form novalidate ref="loginForm" @submit="onLoginPressed">
      <div class="input__box">
        <input
          v-model="usernameEmailInput"
          type="text"
          id="login-username-email"
          autocomplete="off"
          required
        />
        <span>Username/Email</span>
      </div>

      <div class="input__box">
        <input
          v-model="passwordInput"
          type="password"
          id="login-passwd"
          autocomplete="off"
          required
        />
        <span>Password</span>
      </div>

      <div class="input__box">
        <button
          v-bind:class="btnDisable ? 'btn btn__disable' : 'btn btn__active'"
          :disabled="btnDisable"
          type="submit"
        >
          Log In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginForm",

  data() {
    return {
      usernameEmailInput: "",
      passwordInput: "",
    };
  },

  computed: {
    btnDisable: function () {
      return !this.usernameEmailInput || !this.passwordInput ? true : false;
    },
  },

  methods: {
    ...mapActions(["checkLogin"]),
    // triggers when the form is submitted
    onLoginPressed(e) {
      e.preventDefault();
      this.checkLogin({
        usernameEmail: this.usernameEmailInput,
        password: this.passwordInput,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_form.scss";
</style>
