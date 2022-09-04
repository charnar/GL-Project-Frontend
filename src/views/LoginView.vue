<template>
  <div>
    <h1>Welcome!</h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  components: { LoginForm },
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
