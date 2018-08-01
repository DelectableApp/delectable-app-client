<script>
  export default {
    name: 'SignUp',
    middleware: 'unauthenticated',
  };
</script>

<template>
  <div>
    <h2>Sign up</h2>
    <p>Déjà un compte ? <router-link :to="{name:'login'}">Connectez-vous</router-link></p>
  </div>
</template>

<style lang="scss">

</style>
