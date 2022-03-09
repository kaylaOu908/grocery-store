<template>
<div>
<h1>Your Cart</h1>
  
  <ProductList :products="cart" />
</div>
</template>


<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'vue/multi-word-component-names/Cart',
  components: {
    ProductList
  },
  computed: {
    cart() {
      return this.$root.$data.getCart();
    }
}
}
</script>

