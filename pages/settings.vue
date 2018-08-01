<script>
  export default {
    name: 'Settings',
    middleware: 'authenticated',
  };
</script>

<template>
  <div>
    <h2>Settings</h2>
    <ul>
      <li>
        <router-link :to="{name:'settings'}">Account</router-link>
      </li>
      <li>
        <router-link :to="{name:'settings-password'}">Password</router-link>
      </li>
      <li>
        <router-link :to="{name:'settings-notifications'}">Notifications</router-link>
      </li>
      <li>
        <router-link :to="{name:'settings-find-friends'}">Find friends</router-link>
      </li>
      <li>
        <router-link :to="{name:'settings-blocked-users'}">Blocked users</router-link>
      </li>
      <li>
        <router-link :to="{name:'settings-accessibility'}">Accessibility</router-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>

<style lang="scss">

</style>
