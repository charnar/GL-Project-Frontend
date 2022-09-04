<template>
  <form @submit="onSubmit" class="login-form">
    <span class="input">
      <input type="text" id="account" placeholder="Username/Email" />
    </span>

    <span class="input">
      <input type="password" id="password" placeholder="Password" />
    </span>

    <!-- <button type="submit">Submit</button> -->
  </form>
</template>

<script>
export default {
  name: "LoginForm",

  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log("Pressed log in");
    },
  },
};
</script>

<style lang="scss" scoped>
input,
button {
  font-size: 2rem;
  z-index: 100;
}

input {
  background: none;
  border: none;
  color: white;
}

input::placeholder {
  color: $color-text-placeholder;
  font-weight: thin;
}

input:focus {
  outline: none;
  color: white;
}
.input {
  position: relative;
  padding: 15px 20px;
  font-size: 2rem;
  display: block;
  margin: 2rem 0;
}

.input::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  border: 3px solid transparent;
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

button {
}
</style>
