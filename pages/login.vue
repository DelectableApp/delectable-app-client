<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Login',
    middleware: 'unauthenticated',
    methods: {
      ...mapActions({
        login: 'account/login',
      }),
      handleLoginBtnClick() {
        this.login({
          user_email: this.mailOrLoginInput,
          user_login: this.mailOrLoginInput,
          user_password: this.passwordInput,
        });
      },
    },
  };
</script>

<template>
  <div>
    <h2>Login</h2>
    <form v-on:submit.prevent>
      <div>
        <input type="text" placeholder="Identifiant" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit" @click="handleLoginBtnClick">Connexion</button>
      </div>
    </form>
    <p><router-link :to="{name:'forgot-password'}">Mot de passe oublié ?</router-link></p>
    <p>Pas de compte ? <router-link :to="{name:'signup'}">Incrivez-vous</router-link></p>
  </div>
</template>

<style lang="scss">

</style>
