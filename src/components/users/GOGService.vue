<template>
  <div class="service__btn__wrapper">
    <button @click="handleClick"></button>
    <!-- <a href="javascript:window.open('','_blank');">Sketchy AF</a> -->
  </div>
</template>

<script>
export default {
  name: "GOGService",
  data() {
    return {
      GOGPopupWindow: "",
    };
  },

  methods: {
    handleClick(e) {
      this.GOGPopupWindow = parent.window.open(
        "https://auth.gog.com/auth?client_id=46899977096215655&redirect_uri=https%3A%2F%2Fembed.gog.com%2Fon_login_success%3Fredirect_uri=http%3A%2F%2localhost%3A3000%2Flinkedorigin%3Dclient&response_type=code&layout=client2",
        "_blank",
        "popup"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: url("@/assets/img/gog_logo.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  height: 100px;
  width: 100px;
  align-content: center;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
}
</style>
