<!-- The button component which adds the clicked item to the wishlist array in store -->
<template lang="pug">
  .wishlist-btn.d-flex.align-items-center(@click="toggleWishlist(item)", v-bind:style="{backgroundColor: activeColor}")
    .heart-icon
</template>

<script>
export default {
  props: ["item"],
  computed: {
    wishList() {
      return this.$store.getters["wishlist/WISHLIST"];
    },
    activeColor() {
     return this.wishList.includes(this.item) ? "pink" : "white"
    }
  },
  methods: {
  // methods which trigger actions to add/remove products to/from wishlist in store,
  // based on if product is currently in wishlist  
    add(item) {
      this.$store.dispatch("wishlist/ADDACTION", item);
    },
    remove(item) {
      this.$store.dispatch("wishlist/REMOVEACTION", item);
    },
    toggleWishlist(item) {
      this.wishList.includes(item) ? this.remove(item) : this.add(item)
    }
  }
};
</script>

<style lang="scss" scoped>
  .wishlist-btn {
    width: 50px;
    height: 50px;
    border: 3px solid pink;
    border-radius: 50%;
  }

  .heart-icon {
    -webkit-mask-image: url(../assets/heart.svg);
    mask-image: url(../assets/heart.svg);
    display: block;
    margin: auto;
    height: 24px;
    width: 24px;
    background-color: black;
  }
</style>
