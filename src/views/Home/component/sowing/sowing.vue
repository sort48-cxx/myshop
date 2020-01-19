<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swipe-top">
    <!-- slides -->
    <swiper-slide>
      <img src="@/images/home/banner1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/home/banner2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/home/banner3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/images/home/banner4.jpg" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

export default {
  data () {
    return {
      swiperOption: {
        // 进来就加载
        notNextTick: true,
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'my-bullet-active'
        },
        loop: true,
        //  配置自动播放
        autoplay: {
          delay: 3000,
          // 最后一个是否停止
          stopOnLastSlide: false,
          // 用户操作swiper之后，是否禁止autoplay
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        // 配置速度
        speed: 600,
        // 滑动后回调函数
        on: {
          slideChangeTransitionEnd () {}
        }
      }
    }
  }
}
</script>

<style scoped>
.swipe-top {
  margin-top: 4rem;
  margin-left: 1rem;
  margin-right: 1rem;
  height: 10rem;
  border-radius: 1rem;
}
.swipe-top img {
  width: 100%;
  height: 100%;
}

</style>
