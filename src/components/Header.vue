<template>
  <div class="header">
    <h1 class="text">Nice Music</h1>
    <router-link tag="div" class="mine" to="/user">
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "../assets/stylus/variable"
@import "../assets/stylus/mixin"
  .header
    position relative
    height 44px
    text-align center
    color $color-theme
    font-size 0
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
