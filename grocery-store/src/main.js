import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false
let data = {
  currentID: 0,
  products: mock,
  cart: [{
    id: '',
    name: '',
    price: '',
    country: '',
    image: '',
  }],
  getCart(){
    return this.cart;
  },
  addToCart(name,price,country, image){
      this.cart.push({
      id: this.currentID,
      name:name,
      price:price,
      country: country,
      image: image
     

    });

}
}
new Vue({
  router,
  data,
   render: h => h(App)
}).$mount('#app')
