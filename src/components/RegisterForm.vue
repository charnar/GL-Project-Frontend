<template>
  <form ref="registerForm" @submit="onSubmit" class="register-form">
    <span class="gradient__box">
      <input
        autocomplete="off"
        type="text"
        id="username"
        placeholder="Enter your username"
      />
      <label for="username" class="label">Username</label>
    </span>

    <span class="gradient__box">
      <input
        autocomplete="off"
        type="text"
        id="email"
        placeholder="Enter your email address"
      />
      <label for="email" class="label">Email</label>
    </span>

    <span class="gradient__box">
      <input type="password" id="password" placeholder="Enter your password" />
      <label for="password" class="label">Password</label>
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
      console.log("Pressed log in");
    },

    // resets the inputs on the HTML Form
    resetForm() {
      this.$refs.registerForm.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin-top: 4rem;
  width: 70%;
  max-width: 450px;
}

input {
  width: 100%;
  font-size: 1.6rem;
  z-index: 1;
}

.label {
  position: absolute;
  font-size: 1.8rem;
  left: 10px;
  top: 16px;
  transition: all 0.2s;
  padding: 0 10px;
  z-index: 1;
  color: color.$font-secondary;
  background: none;

  &::before {
    content: "";
    height: 5px;
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    z-index: -1;
  }
}

$inputs: text, password;

@each $input in $inputs {
  [type="#{$input}"] {
    position: relative;
    top: 8px;
    background: none;
    color: color.$font-main;

    &:focus {
      outline: none;
      color: color.$font-main;

      + .label {
        top: 6px;
        font-size: 1.5rem;
        color: color.$font-tertiary;
      }

      &::placeholder {
        opacity: 1;
        animation-delay: 0.2s;
      }
    }

    &:not(:placeholder-shown) {
      + .label {
        font-size: 1.5rem;
        top: 6px;
      }
    }

    &::placeholder {
      color: color.$font-secondary;
      font-weight: thin;
      opacity: 0;
      transition: all 0.3s;
    }
  }
}

input[type="submit"] {
  margin-top: 8rem;
  display: block;
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  @include mixin.gradient-bg(
    0.25turn,
    color.$button-gradient-start,
    color.$button-gradient-end
  );
}

.gradient__box {
  position: relative;
  padding: 18px 20px;
  display: block;
  margin: 1.6rem 0;
}

.gradient__box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  border: 2px solid transparent;
  @include mixin.gradient-bg(
    0.25turn,
    color.$button-gradient-start,
    color.$button-gradient-end,
    true
  );
}
</style>
