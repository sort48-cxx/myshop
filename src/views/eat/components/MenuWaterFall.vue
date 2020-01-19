<template>
  <div class="container-water-fall">
    <waterfall col="2">
      <div class="cell-item">
        <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
        <div class="item-body">
          <div class="item-desc">测试数据1</div>
          <div class="item-footer">
            <img class="avatar" src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" alt />
            <div class="name">测试数据2</div>
          </div>
        </div>
      </div>
      <div class="cell-item">
        <img src="https://img.ddimg.mobi/recipe/e4ac24825c1151569395541515.jpg" />
        <div class="item-body">
          <div class="item-desc">测试数据1</div>
          <div class="item-footer">
            <img
              class="avatar"
              src="https://img.ddimg.mobi/recipe/e4ac24825c1151569395541515.jpg"
              alt
            />
            <div class="name">测试数据2</div>
          </div>
        </div>
      </div>
      <div class="cell-item">
        <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
        <div class="item-body">
          <div class="item-desc">测试数据1</div>
          <div class="item-footer">
            <img class="avatar" src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" alt />
            <div class="name">测试数据2</div>
          </div>
        </div>
      </div>
      <div class="cell-item">
        <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
        <div class="item-body">
          <div class="item-desc">测试数据1</div>
          <div class="item-footer">
            <img class="avatar" src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" alt />
            <div class="name">测试数据2</div>
          </div>
        </div>
      </div>
      <div class="cell-item">
        <img src="https://img.ddimg.mobi/recipe/e4ac24825c1151569395541515.jpg" />
        <div class="item-body">
          <div class="item-desc">测试数据1</div>
          <div class="item-footer">
            <img
              class="avatar"
              src="https://img.ddimg.mobi/recipe/e4ac24825c1151569395541515.jpg"
              alt
            />
            <div class="name">测试数据2</div>
          </div>
        </div>
      </div>
      <div class="cell-item">
        <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
        <div class="item-body">
          <div class="item-desc">测试数据1</div>
          <div class="item-footer">
            <img class="avatar" src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" alt />
            <div class="name">测试数据2</div>
          </div>
        </div>
      </div>
    </waterfall>
  </div>
</template>

<script>
import waterfall from 'vue-waterfall2'
import Vue from 'vue'

Vue.use(waterfall)

export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.container-water-fall {
  width: 100vw;
  box-sizing: border-box;
  background-color: #f5f5f5f5;
}
.container-water-fall .vue-waterfall {
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 2rem;
}
.container-water-fall h4 {
  padding-top: 56px;
  padding-bottom: 1rem;
  font-family: PingFangSC-Medium;
  font-size: 2rem;
  color: #000000;
  letter-spacing: 1px;
  text-align: justify;
}
.container-water-fall .cell-item {
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 1px;
  padding: 0.3rem;
}
.container-water-fall .cell-item img {
  border-radius: 12px;
  width: 100%;
  display: block;
  background-size: contain;
  background-image: url('../../../images/placeholderImg/product-img-load.png');
}
.container-water-fall .cell-item .item-body {
  padding: 0.6rem;
}
.container-water-fall .cell-item .item-body .item-desc {
  font-size: 0.8 rem;
  color: #333333;
  line-height: 1rem;
  font-weight: bold;
}
.container-water-fall .cell-item .item-body .item-footer {
  margin-top: 1rem;
  position: relative;
  display: flex;
  align-items: center;
}
.container-water-fall .cell-item .item-body .item-footer .avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.container-water-fall .cell-item .item-body .item-footer .name {
  max-width: 150px;
  margin-left: 10px;
  font-size: 0.75rem;
  color: #999999;
}
</style>
