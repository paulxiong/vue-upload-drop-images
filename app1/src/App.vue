<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Yourrrrr Vue.js App"/>
  <B_import msg="Welcome to Myyyyyyyy Vue.js App"/>
  <UpLoad msg= "Upload your file"/>
    <VueFileAgent
      :uploadUrl="'https://www.mocky.io/v2/5d4fb20b3000005c111099e3'"
      :uploadHeaders="{}"
      :multiple="true"
      :deletable="true"
      :editable="true"
      :meta="true"
      :accept="'image/*,video/*,.pdf,.zip'"
      :maxSize="'14MB'"
      :maxFiles="8"
      :helpText="'Select files'"
      :errorText="{
        type: 'Please select images, videos, pdf or zip files',
        size: 'You selected a larger file!',
      }"
      :thumbnailSize="120"
      :theme="'list'"
      v-model="fileRecords"
    ></VueFileAgent>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UpLoad from './components/UpLoad.vue'
import B_import from './components/fileB.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
    UpLoad,
    B_import
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
