<template>
  <div class="form__container">
    <form novalidate ref="loginForm" @submit="onLoginPressed">
      <div
        class="input__box"
        :class="{
          input__box__error: this.getLoginStatus === 'INVALID_USERNAME',
        }"
      >
        <input
          v-model="usernameEmailInput"
          type="text"
          id="login-username-email"
          autocomplete="off"
          required
          @click="resetStatus()"
        />
        <span>{{
          this.getLoginStatus === "INVALID_USERNAME"
            ? "User does not exist!"
            : "Username/Email"
        }}</span>
      </div>

      <div
        class="input__box"
        :class="{
          input__box__error: this.getLoginStatus === 'INVALID_PASSWORD',
        }"
      >
        <input
          v-model="passwordInput"
          type="password"
          id="login-passwd"
          autocomplete="off"
          required
          @click="resetStatus()"
        />
        <span>{{
          this.getLoginStatus === "INVALID_PASSWORD"
            ? "Wrong password!"
            : "Password"
        }}</span>
      </div>

      <div class="input__box">
        <button
          v-if="this.getLoginStatus === 'LOGIN_PROCESSING'"
          class="btn btn__disable"
          disabled
        >
          <div class="loader"></div>
        </button>
        <button
          v-else
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginForm",

  data() {
    return {
      usernameEmailInput: "",
      passwordInput: "",
    };
  },

  computed: {
    ...mapGetters(["getLoginStatus"]),
    btnDisable: function () {
      return !this.usernameEmailInput ||
        !this.passwordInput ||
        this.getLoginStatus !== "NORMAL"
        ? true
        : false;
    },
  },

  methods: {
    ...mapActions(["checkLogin", "updateLoginStatus"]),
    // triggers when the form is submitted
    onLoginPressed(e) {
      e.preventDefault();
      document.activeElement.blur();
      this.updateLoginStatus("LOGIN_PROCESSING");
      this.checkLogin({
        usernameEmail: this.usernameEmailInput,
        password: this.passwordInput,
      });
    },

    resetStatus() {
      this.updateLoginStatus("NORMAL");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_components.scss";
@import "@/assets/sass/_form.scss";
</style>
