<!-- loops through the sample products listed in data and uses the 'Product' 
component to display them on the screen
-->
<template lang="pug">
  .home
    .home-text.mt-3.mb-5.text-center
      h1 Products
      h5 Click on buttons to add products to your wishlist. &nbsp;
        router-link(to="/wishlistpage") Then view your wishlist!
    .home-products
      b-container
        b-row
          product(v-for="product in products" :item="product.name" :key="product.name") {{ product.name }}
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue'

export default {
  name: 'home',
  data () {
    return {
      products: [
        {name: 'Phone' },
        {name: 'Laptop' },
        {name: 'TV', },
        {name: 'Table' },
        {name: 'Toy' },
        {name: 'Blanket' },
        {name: 'Keyboard' },
        {name: 'Bracelet' },
        {name: 'Necklace' }
      ]
    }
  },   
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    min-height: stretch;
    width: 100%;
    background-color: lightgray;
  }

  .home-text {
    h1 {
      font-weight: 350;
    }
    h5 {
      font-weight: 350;
    }
  }
</style>
