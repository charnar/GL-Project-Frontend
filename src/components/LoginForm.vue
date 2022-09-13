<template>
  <form ref="loginForm" @submit="onSubmit" class="login__form">
    <span class="gradient__box">
      <input
        type="text"
        id="login-username-email"
        placeholder="Enter your username or email"
        autocomplete="off"
      />
      <!-- <label for="login-username-email" class="label">Username/Email</label> -->
    </span>

    <span class="gradient__box">
      <input
        type="password"
        id="login-passwd"
        placeholder="Enter your password"
      />
      <!-- <label for="login-passwd" class="label">Password</label> -->
    </span>

    <input type="submit" value="Log In" />
  </form>
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
