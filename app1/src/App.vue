<template>
  <link rel="stylesheet" href="zumly/dist/zumly.css">

  <img alt="Vue logo" src="./assets/logo.png">
  <H1> + Zumly </H1>
  
  <button @click="A_method1"  >Click to enter Zumly World!</button>
  <B_import ref="B" :msg_inB='boostx_msg' @boost_vclick="boost_vclick_inA" />
  <B_zumly ref="Z"/>
</template>

<script>
import B_import from './components/fileB.vue'
import B_zumly from './components/zumly.vue'

export default {
  name: 'App',
  components: {
    B_import, B_zumly
  },
  data() {
    return {
      boostx_msg: '001',
    }
  },
  methods: {
    A_method1() {
      // this.$refs.B.method1()
      this.$refs.Z.method1()
    },
    boost_vclick_inA() {
      alert('boost_vclick_inA')
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