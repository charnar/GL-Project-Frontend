<template>
  <div class="form__container">
    <form novalidate ref="registerForm" @submit="onRegisterSubmit">
      <div
        class="input__box"
        :class="{
          input__box__error: this.getRegisterStatus === 'DUPLICATE_USERNAME',
        }"
      >
        <input
          v-model="usernameInput"
          autocomplete="off"
          type="text"
          id="register-username"
          required
          @click="resetStatus()"
        />
        <span>{{
          this.getRegisterStatus === "DUPLICATE_USERNAME"
            ? "Username already exists!"
            : "Username"
        }}</span>
      </div>

      <div
        class="input__box"
        :class="{
          input__box__error: this.getRegisterStatus === 'DUPLICATE_EMAIL',
        }"
      >
        <input
          v-model="emailInput"
          autocomplete="off"
          type="text"
          id="register-email"
          required
          @click="resetStatus()"
        />
        <span>{{
          this.getRegisterStatus === "DUPLICATE_EMAIL"
            ? "Email has been registered!"
            : "Email"
        }}</span>
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
          v-if="this.getRegisterStatus === 'REGISTER_PROCESSING'"
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
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["getRegisterStatus"]),
    btnDisable: function () {
      return !this.usernameInput ||
        !this.passwordInput ||
        !this.emailInput ||
        this.getRegisterStatus != "NORMAL"
        ? true
        : false;
    },
  },

  methods: {
    ...mapActions(["checkRegistration", "updateRegisterStatus"]),

    // triggers when the form is submitted
    onRegisterSubmit(e) {
      e.preventDefault();
      this.updateRegisterStatus("REGISTER_PROCESSING");
      this.checkRegistration({
        username: this.usernameInput,
        email: this.emailInput,
        password: this.passwordInput,
      });
    },

    resetStatus() {
      this.updateRegisterStatus("NORMAL");
    },
    // resets the inputs on the HTML Form
    resetForm() {
      this.$refs.registerForm.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_form.scss";
@import "@/assets/sass/_components.scss";
</style>
