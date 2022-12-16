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
    <input type="hidden" name="openid.realm" value="http://localhost:3000/" />
    <input
      type="hidden"
      name="openid.return_to"
      value="http://localhost:3000/user/linked"
    />
    <button type="submit" :disabled="this.disableFlag">
      <img src="@/assets/img/steam_logo.png" />{{
        this.disableFlag ? "Already linked" : "Link with Steam"
      }}
    </button>
  </form>
</template>

<script>
export default {
  name: "SteamButton",
  props: ["disableFlag"],
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  background: rgb(233, 233, 233);
  color: rgb(0, 0, 0);
  font-weight: 600;

  &:hover {
    background: rgb(168, 168, 168);
    cursor: pointer;
  }

  img {
    height: 4rem;
    padding-right: 2rem;
  }
}
</style>
