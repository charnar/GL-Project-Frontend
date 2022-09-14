<template>
  <div class="form__container">
    <form novalidate ref="registerForm" @submit="onSubmit">
      <div class="input__box">
        <input autocomplete="off" type="text" id="register-username" required />
        <span>Username</span>
      </div>

      <div class="input__box">
        <input autocomplete="off" type="text" id="register-email" required />
        <span>Email</span>
      </div>

      <div class="input__box">
        <input type="password" id="register-password" required />
        <span>Password</span>
      </div>

      <div class="input__box">
        <input type="submit" value="Register" />
      </div>
    </form>
  </div>
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
