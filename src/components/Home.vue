<template><div class="home">

  <section class="hero is-light is-bold is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          MyStock
        </h1>
        <h2 class="subtitle">
          Advanced analytics for your future.
        </h2>
      </div>
    </div>
  </section>

</div></template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'home',
    data () {
      return {
        busy: false
      }
    },
    computed: {
      ...mapGetters([
        // some state
      ])
    },
    methods: {
      ...mapActions([
        // some action
      ]),
      async fetch () {
        this.busy = true
        await Promise.resolve()
        this.busy = false
      }
    },
    async created () {
      this.fetch()
    },
    mounted () {
      console.log('* Mounted Home!')
    }
  }
</script>

<style scoped>
  .home {

  }
  .title {
    font-size: 20rem;
  }
</style>
