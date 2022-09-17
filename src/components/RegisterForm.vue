<template>
  <div class="form__container">
    <form novalidate ref="registerForm" @submit="onRegisterSubmit">
      <div class="input__box">
        <input
          v-model="usernameInput"
          autocomplete="off"
          type="text"
          id="register-username"
          required
        />
        <span>Username</span>
      </div>

      <div class="input__box">
        <input
          v-model="emailInput"
          autocomplete="off"
          type="text"
          id="register-email"
          required
        />
        <span>Email</span>
      </div>

      <div class="input__box">
        <input
          v-model="passwordInput"
          type="password"
          id="register-password"
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
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterForm",

  data() {
    return {
      usernameInput: "",
      emailInput: "",
      passwordInput: "",
    };
  },

  computed: {
    btnDisable: function () {
      return !this.usernameInput || !this.passwordInput || !this.emailInput
        ? true
        : false;
    },
  },

  methods: {
    ...mapActions(["checkRegistration"]),

    // triggers when the form is submitted
    onRegisterSubmit(e) {
      e.preventDefault();
      this.checkRegistration({
        username: this.usernameInput,
        email: this.emailInput,
        password: this.passwordInput,
      });
    },

    // resets the inputs on the HTML Form
    resetForm() {
      this.$refs.registerForm.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_form.scss";
</style>
