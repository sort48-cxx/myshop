<template>
  <div class="p-box">
    <ul>
      <li>
        <div>
          <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
        </div>
        <div class="p-d1">四季宝柔滑花生酱 340g/瓶</div>
        <div class="p-d2">注释</div>
        <div class="flex">
          <div class="p-d3">¥16.90</div>
          <div class="p-d4">¥19.90</div>
          <div class="flex-1">
            <svg-icon iconClass="car" class="icon-size"></svg-icon>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
        </div>
        <div class="p-d1">四季宝柔滑花生酱 340g/瓶</div>
        <div class="p-d2">注释</div>
        <div class="flex">
          <div class="p-d3">¥16.90</div>
          <div class="p-d4">¥19.90</div>
          <div class="flex-1">
            <svg-icon iconClass="car" class="icon-size"></svg-icon>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
        </div>
        <div class="p-d1">四季宝柔滑花生酱 340g/瓶</div>
        <div class="p-d2">注释</div>
        <div class="flex">
          <div class="p-d3">¥16.90</div>
          <div class="p-d4">¥19.90</div>
          <div class="flex-1">
            <svg-icon iconClass="car" class="icon-size"></svg-icon>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" />
        </div>
        <div class="p-d1">四季四季四季宝柔滑花生酱 340g/瓶</div>
        <div class="p-d2">注释</div>
        <div class="flex">
          <div class="p-d3">¥16.90</div>
          <div class="p-d4">¥19.90</div>
          <div class="flex-1">
            <svg-icon iconClass="car" class="icon-size"></svg-icon>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.p-box {
  padding-bottom: 70px;
  background-color: #f4f4f4;
}
.p-box ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-right: 0.5rem;
}
.p-box ul li {
  flex: 1;
  margin-top: 1rem;
  margin-left: 0.5rem;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: .6rem;
}
.p-box ul li img {
  width: 7rem;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-1 {
  flex: 1;
}
.p-d1 {
  font-size: 0.625rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
  line-height: 1rem;
}
.p-d2 {
  font-size: 0.45rem;
  color: grey;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-top: 0.2rem;
  white-space: nowrap;
  margin-bottom: 1rem;
  text-align: left;
}
.p-d3 {
  color: #f37078;
  font-size: 0.928rem;
  margin-right: 0.3rem;
}
.p-d4 {
  font-size: 0.6875rem;
  color: #999;
  text-decoration: line-through;
}
.icon-size {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
