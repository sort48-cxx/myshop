<template>
  <div>
    <div class="flex layout">
      <div class="name">限时优惠</div>
      <div class="flex-1 timedowm">
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>
            <span class="item">{{ timeData.minutes }}</span>
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="more">更多 >></div>
    </div>
    <div class="flashItemwrapper">
      <ul class="f-ul" ref="ulWrapper">
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
          </div>
          <div class="li-d1">四季宝柔滑花生酱 340g/瓶</div>
          <div class="flex flex-a-c">
            <div class="flex-1">
              <p class="li-d2">¥16.90</p>
              <p class="li-d3">¥19.90</p>
            </div>
            <div>
              <svg-icon iconClass="car" class="icon-size"></svg-icon>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CountDown } from 'vant'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      time: 30 * 60 * 1000 * 100
    }
  },
  components: {
    [CountDown.name]: CountDown
  },
  mounted () {
    this.$nextTick(() => {
      // 给ul设置值
      this.$refs.ulWrapper.style.width = '820px'
      if (!this.scroll) {
        // 名字一定要唯一 和父组件独立
        this.scroll = new BScroll('.flashItemwrapper', {
          probeType: 2,
          startX: 0,
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>
<style scoped>
.layout {
  margin: 1rem 1rem 0.5rem 1rem;
  line-height: 21px;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.timedowm {
  margin-left: 1rem;
  text-align: left;
}
.name {
  font-size: 1rem;
  color: #333;
  border-left: #ffb923 3px solid;
  padding-left: 0.7rem;
}
.more {
  text-align: right;
  font-size: 0.8rem;
  color: #999;
}
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ffb923;
}
.f-ul {
  display: flex;
  margin-top: 1rem;
}
.f-ul li {
  flex: 1;
  margin-left: 0.7rem;
}
.f-ul li img {
  width: 6rem;
}
.flex {
  display: flex;
}
.flex-1 {
  flex: 1;
}
.flex-a-c {
  align-items: center;
}
.flashItemwrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.li-d1 {
  font-size: 0.625rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
  line-height: 1.2rem;
  margin-bottom: 0.5rem;
  color: #666;
}
.li-d2 {
  color: #f37078;
  font-size: 0.928rem;
  margin-right: 0.3rem;
  text-align: left;
  margin-bottom: .3rem;
}
.li-d3 {
  font-size: 0.6875rem;
  color: #999;
  text-decoration: line-through;
  text-align: left;
}
.icon-size {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
}
</style>
