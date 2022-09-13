<template>
  <form ref="registerForm" @submit="onSubmit" class="register-form">
    <span class="gradient__box">
      <input
        autocomplete="off"
        type="text"
        id="register-username"
        placeholder="Enter your username"
      />
      <!-- <label for="register-username" class="label">Username</label> -->
    </span>

    <span class="gradient__box">
      <input
        autocomplete="off"
        type="text"
        id="register-email"
        placeholder="Enter your email address"
      />
      <!-- <label for="register-email" class="label">Email</label> -->
    </span>

    <span class="gradient__box">
      <input
        type="password"
        id="register-password"
        placeholder="Enter your password"
      />
      <!-- <label for="register-password" class="label">Password</label> -->
    </span>

    <input type="submit" value="Register" />
  </form>
</template>

<script>
export default {
  name: "RegisterForm",

  methods: {
    // triggers when the form is submitted
    onSubmit(e) {
      e.preventDefault();
      console.log("Pressed register button");
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
