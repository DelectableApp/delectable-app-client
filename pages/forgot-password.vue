<script>
  export default {
    name: 'ForgotPassword',
    middleware: 'unauthenticated',
  };
</script>

<template>
  <div>
    <h2>Lost password</h2>
    <p><button>Me renvoyer un mail</button></p>
    <p><router-link :to="{name:'index'}">Retour</router-link></p>
  </div>
</template>

<style lang="scss">

</style>
