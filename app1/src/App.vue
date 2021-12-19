<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <button @click="A_method1"  >Click A_method</button>
  <B_import ref="B" :msg_inB='boostx_msg' @boost_vclick="boost_vclick_inA" />


  <div class="example zumly-canvas"></div>

</template>

<script>
import B_import from './components/fileB.vue'

export default {
  name: 'App',
  components: {
    B_import
  },
  data() {
    return {
      boostx_msg: '001',
    }
  },
  methods: {
    A_method1() {
      this.$refs.B.method1()
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
.world{
  width: 250px;
  height: 250px;
  top: -5px
}
.o {
  border: 3px solid #ffcc00
}
.hello {
  font-size: 4em;
  text-align: center;
  font-family: arial;
  font-weight: bold;
   width: 400px;
  height: 200px;
}

</style>
