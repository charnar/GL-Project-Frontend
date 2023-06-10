<template>
  <form action="https://steamcommunity.com/openid/login" method="post">
    <input
      type="hidden"
      name="openid.identity"
      value="http://specs.openid.net/auth/2.0/identifier_select"
    />
    <input
      type="hidden"
      name="openid.claimed_id"
      value="http://specs.openid.net/auth/2.0/identifier_select"
    />
    <input
      type="hidden"
      name="openid.ns"
      value="http://specs.openid.net/auth/2.0"
    />
    <input type="hidden" name="openid.mode" value="checkid_setup" />
    <input type="hidden" name="openid.realm" :value="homeLink" />
    <input
      type="hidden"
      name="openid.return_to"
      :value="`${this.homeLink}/linked/steam`"
    />
    <button type="submit" :disabled="this.disableFlag"></button>
  </form>
</template>

<script>
import { HOME_LINK } from "@/configs";
export default {
  name: "SteamButton",
  data() {
    return {
      homeLink: HOME_LINK,
    };
  },
  props: ["disableFlag"],
};
</script>

<style lang="scss" scoped>
button {
  background: url("@/assets/img/steam_logo.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #3c3c3c;
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
