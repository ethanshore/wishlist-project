<!-- Page which displays the wishlisted products-->
<template lang="pug">
  .wishlist-page
    .wishlist-page-text.mt-3.mb-5.text-center
      h1 Wishlist
      h5(v-if="!Array.isArray(wishList) || !wishList.length") Wishlist is empty. &nbsp;
        router-link(to="/") Go add products!
      h5(v-else) Click buttons to remove products from wishlist.
    .wishlist-page-products
      b-container
        b-row
          product(v-for="product in wishList" :item="product" :key="product" ) {{ product }}
</template>

<script>
import Product from '@/components/Product.vue'

export default {
  computed: {
    wishList () {
      return this.$store.getters['wishlist/WISHLIST']
    }
  },
  components: {
    Product
  }
}
</script>

<style lang="scss" scoped>
  .wishlist-page {
    height: 100%;
    min-height: stretch;
    width: 100%;
    background-color: lightgray;
  }

  .wishlist-page-text {
    h1 {
      font-weight: 350;
    }
    
    h5 {
      font-weight: 350;
    }
  }
</style>


