<template>
  <div class="form__container">
    <form novalidate ref="loginForm" @submit="onSubmit">
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
export default {
  name: "LoginForm",
  methods: {
    // triggers when the form is submitted
    onSubmit(e) {
      e.preventDefault();
      console.log("Pressed log in");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_form.scss";
</style>
