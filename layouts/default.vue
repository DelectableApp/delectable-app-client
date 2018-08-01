<template>
  <div>
    <header v-if="isAuthenticated">
      <navigation-bar />
    </header>

    <main>
      <nuxt/>
    </main>

    <footer>

    </footer>
  </div>
</template>

<style lang="scss">

</style>

<script>

  import { mapGetters } from 'vuex';
  import NavigationBar from '@/components/navigation-bar/NavigationBar';

  export default {
    name: 'defautLayout',
    components: { NavigationBar },
    beforeCreate() {
      if(process.env.node_env === 'production') {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js', {});
        }
      }
    },
    data () {
      return {};
    },
    computed: {
      ...mapGetters({
        isAuthenticated: 'account/isAuthenticated',
      }),
    },
    watch: {
      isAuthenticated(newValue, oldValue) {
        if (newValue && !oldValue) {
          this.$router.replace({
            name: 'index',
          });
        } else if (!newValue && oldValue) {
          this.$router.replace({
            name: 'login',
          });
        }
      },
    },
  };
</script>
