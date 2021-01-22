<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <div>
      <swiper ref="mySwiper" :options="swiperOptions" v-if="bannerList">
        <swiper-slide class="banner-item" v-for="item in bannerList" :key="item.id">
          <a target="_blank" :href="item.h5Url">
            <img :src="item.picUrl" width="100%" style="display:block;" />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 歌单推荐 -->
    <div class="disc-list">
      <h1 class="title">热门歌单推荐</h1>
      <ul>
        <li class="item" v-for="(item, i) in discList" :key="i">
          <div class="icon">
            <img v-lazy="item.cover" width="60" height="60" />
          </div>
          <div class="text">
            <h2 class="name" v-html="item.title"></h2>
            <p class="desc" v-html="item.username"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { getBanner, getDiscList } from '../api/api'

export default {
  name: 'recommend',
  components: { Swiper, SwiperSlide },
  data() {
    return {
      bannerList: null,
      discList: [],
      // 轮播图配置
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created() {
    this.getBanner()
    this.getDiscList()
  },
  methods: {
    getBanner() {
      getBanner().then(res => {
        console.log(res)
        this.bannerList = res.data
      })
    },
    getDiscList() {
      getDiscList().then(res => {
        console.log(res)
        this.discList = res.data.list
      })
    }
  }
}
</script>

<style lang="stylus">
@import "../assets/stylus/variable"

  // 轮播图
 .swiper-pagination-bullet
    opacity: 1;
    background: $color-text-l
   &.swiper-pagination-bullet-active
     width 20px
     border-radius: 5px
     background: $color-text-ll

.disc-list
  .title
    height: 65px
    line-height: 65px
    text-align: center
    font-size: $font-size-medium
    color: $color-theme
  .item
    display: flex
    box-sizing: border-box
    align-items: center
    padding: 0 20px 20px 20px
    .icon
      flex: 0 0 60px
      width: 60px
      padding-right: 20px
    .text
      display: flex
      flex-direction: column
      justify-content: center
      flex: 1
      line-height: 20px
      overflow: hidden
      font-size: $font-size-medium
      .name
        margin-bottom: 10px
        color: $color-text
      .desc
        color: $color-text-d
</style>
