<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="A_method1">Click A_method</button>
  <B_import ref="B" />
</template>

<script>
import B_import from './components/fileB.vue'

export default {
  name: 'App',
  components: {
    B_import
  },
  methods: {
    A_method1() {
      this.$refs.B.method1()
    }
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
