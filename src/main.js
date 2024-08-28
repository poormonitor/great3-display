import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './assets/less/index.less';
import * as echarts from 'echarts';
import img from './lib/img'
import utils from "./lib/utils";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Carousel,CarouselItem,Image } from "element-ui"

Vue.prototype.$echarts = function (el) {
    return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$images = img
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils)
Vue.use(ElementUI)

Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Image.name, Image);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
