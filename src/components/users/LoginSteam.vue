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
      value="http://localhost:3000/user/accounts"
    />
    <button type="submit">Log in through Steam</button>
  </form>
</template>

<script>
export default {
  name: "LoginSteam",
};
</script>

<style lang="scss" scoped></style>
