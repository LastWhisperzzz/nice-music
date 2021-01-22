<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <div>
      <swiper ref="mySwiper" :options="swiperOptions" v-if="bannerList">
        <swiper-slide class="banner-item" v-for="item in bannerList" :key="item.id">
          <a target="_blank" :href="item.linkUrl">
            <img :src="item.pic" width="100%" style="display:block;" />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 歌单推荐 -->
    <div class="recommend-list">
      <h1 calss="list-title">热门歌单推荐</h1>
      <ul>
        <li class="item" v-for="(item, i) in discList" :key="i">
          <div class="icon">
            <img v-lazy="item.imgurl" width="60" height="60" />
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
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
    // this.getDiscList()
  },
  methods: {
    getBanner() {
      getBanner().then(res => {
        console.log(res)
        this.bannerList = res.banners
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
 .recommend-list
   height: 65px
   line-height: 65px
   text-align center
   font-size: $font-size-medium
   color: $color-theme
</style>
