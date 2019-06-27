<!-- Component which includes a given product and the wishlist button in a container together.
Will be called on 'Home' and 'WishlistPage' pages 
-->
<template lang="pug">
  b-col(cols='6', md='4')
    .product-item
      .d-flex.justify-content-between.align-items-center
        slot
        wishlist-button.float-right(:item="item")
</template>

<script>
import WishlistButton from '@/components/WishlistButton.vue'

export default {
  props: ['item'],
  components: {
    WishlistButton
  }
}
</script>

<style lang="scss" scoped>
  .product-item {
    background: white;
    box-shadow: 0 4px 10px rgba(#000, 0.12);
    border-radius: 5px;
    padding: 40px;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
    }
  }
</style>


