<template>
  <div class="login__container">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
    </div>
    <h1>Register</h1>

    <RegisterForm></RegisterForm>

    <div class="account__message">
      <p>
        Don't have an account?
        <router-link to="/login">Sign In</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  components: { RegisterForm },

  methods: {},
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
