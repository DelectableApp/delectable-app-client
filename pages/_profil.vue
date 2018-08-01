<script>
  export default {
    name: 'Profil',
    middleware: 'authenticated',
  };
</script>

<template>
  <div>
    <h2>Profil de {{$route.params.profil}}</h2>
    <ul>
      <li>
        <router-link :to="{name:'profil'}">Recipes</router-link>
      </li>
      <li>
        <router-link :to="{name:'profil-collections'}">Collections</router-link>
      </li>
      <li>
        <router-link :to="{name:'profil-menus'}">Menus</router-link>
      </li>
      <li>
        <router-link :to="{name:'profil-followers'}">Followers</router-link>
      </li>
      <li>
        <router-link :to="{name:'profil-following'}">Following</router-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>


<style lang="scss" scoped>

</style>
