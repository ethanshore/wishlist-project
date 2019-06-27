<template lang="pug">
  #app
    #nav
      router-link(to="/") View Products | 
      router-link(to="/wishlistpage") View Wishlist
      router-view
</template>


<style lang="scss" scoped>
  #nav {
    text-align: center;
    padding: 20px 0 20px 0;
    background-color: lightgray;

    a {
      color: blue;
    }
  }
</style>
