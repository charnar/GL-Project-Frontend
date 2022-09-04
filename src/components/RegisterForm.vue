<template>
  <form @submit="onSubmit" class="login-form">
    <span class="gradient__box">
      <input type="text" id="username" placeholder="Username" />
    </span>

    <span class="gradient__box">
      <input type="text" id="email" placeholder="Email" />
    </span>

    <span class="gradient__box">
      <input type="password" id="password" placeholder="Password" />
    </span>

    <input type="submit" value="Register" />
  </form>
</template>

<script>
export default {
  name: "RegisterForm",

  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("Pressed log in");
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
  font-size: 2rem;
  z-index: 1;
}

$inputs: text, password;

@each $input in $inputs {
  [type="#{$input}"] {
    background: none;
    color: $color-font-main;

    &:focus {
      outline: none;
      color: $color-font-main;
    }

    &::before {
    }

    &::placeholder {
      color: $color-font-secondary;
      font-weight: thin;
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
  background: linear-gradient(
    0.25turn,
    $color-button-gradient-start,
    $color-button-gradient-end
  );
}

.gradient__box {
  position: relative;
  padding: 15px 20px;
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
  background: linear-gradient(
      0.25turn,
      $color-button-gradient-start,
      $color-button-gradient-end
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  z-index: -1;
}
</style>
