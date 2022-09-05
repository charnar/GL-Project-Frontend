<template>
  <div class="login__container">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
    </div>
    <h1>{{ !showRegisterForm ? "Welcome!" : "Register" }}</h1>

    <LoginForm v-if="!showRegisterForm"></LoginForm>
    <RegisterForm v-else></RegisterForm>

    <div class="account__message">
      <p>
        {{ !showRegisterForm ? "Don't" : "Already" }} have an account?
        <a @click="toggleForm" href="/register">{{
          !showRegisterForm ? "Sign Up" : "Sign In"
        }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default {
  props: {
    showRegisterForm: Boolean,
  },
  components: { LoginForm, RegisterForm },

  methods: {
    toggleForm(e) {
      e.preventDefault();
      this.$emit("toggle-form");
    },
  },
};
</script>

<style scoped lang="scss">
.login__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.account__message {
  margin-top: 2rem;
  font-size: 1.6rem;

  p {
    color: color.$font-secondary;
    font-weight: 500;

    a {
      margin-left: 5px;
      color: color.$font-tertiary;
      text-decoration: none;

      &:hover {
        border-bottom: 1px solid color.$font-tertiary;
      }
    }
  }
}
</style>
