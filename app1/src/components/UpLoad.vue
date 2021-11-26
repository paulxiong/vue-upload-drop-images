<template>
 <div id="vue-file-agent-demo">
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
  </div>

<div class="container py-3">
  <div id="app">
    
    <h5><a target="_blank" href="https://safrazik.github.io/vue-file-agent">Vue File Agent</a> Playground</h5>

<hr>

<ul class="nav nav-pills mb-2">
  <li class="nav-item">
    <a target="_blank" class="nav-link active" href="https://codepen.io/safrazik/pen/BaBVNEE">1. Preloading Exising Demo</a>
  </li>
  <li class="nav-item">
<a target="_blank" class="nav-link" href="https://codepen.io/safrazik/pen/BaBpYme">2. Profile Picture Demo</a>
  </li>
  <li class="nav-item">
    <a target="_blank" class="nav-link" href="https://codepen.io/safrazik/pen/OJLgvya">3. Gmail Inspired Demo</a>
  </li>
</ul>

<hr>
    
    <vue-file-agent-demo></vue-file-agent-demo>
   
  </div>
</div>


</template>

<script>


export default {
    name: 'UpLoad',
    data: function(){
      return {
        fileRecords: [
          {
            "name":"Some Invalid.exe",
            "size": 8165824,
            "type": "application/vnd.microsoft.portable-executable",
            "ext":"exe",
          },

          {
            "name": "Golf.mp4",
            "lastModified": 1576563996233,
            "sizeText": "549 KB",
            "size": 561813,
            "type": "video/mp4",
            "ext": "mp4",
            "dimensions": {
              "width": 640,
              "height": 360
            },
            "url": "https://safrazik.com/vue-file-agent/website/assets/files/Golf.mp4",
            "videoThumbnail": "https://safrazik.com/vue-file-agent/website/assets/files/Golf-thumb.jpg",
            "imageColor": [66, 62, 45]
          },
          {
            "name":"Some Large File.zip",
            "size": 25165824, // 24 MB
            "type": "application/zip",
            "ext":"zip",
          },
        ]
      };
    },
}      
</script>
