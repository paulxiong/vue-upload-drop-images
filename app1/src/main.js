import { createApp } from 'vue'
import App from './App.vue'
import 'zumly/dist/zumly.css'

import Zumly from "zumly/dist/zumly.mjs"

createApp(App).mount('#app')
// Some views
const hello = `
<div class="z-view hello">
H E L L O <br>
W <span class="zoom-me o" data-to="world">O</span> R L D!
</div>
`;

const world ={
    async render() {
        return `
<div class="z-view world">
<img src="https://raw.githubusercontent.com/zumly/website/gh-pages/images/world.png"/>
</div>`
    }
}

const app = new Zumly({
    mount: '.example',
    initialView: 'hello',
    views: {
      hello,
      world
    }
  })
app.init()  