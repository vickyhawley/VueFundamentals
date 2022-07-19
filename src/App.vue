<template>
  <div id="app">
    <MonsterHero />
  </div>
</template>

<script>
import MonsterHero from './components/MonsterHero.vue'

export default {
  name: 'App',
  components: {
    MonsterHero
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
