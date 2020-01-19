<template>
  <div class="nav-main">
    <div class="nav-flex">
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/1.png" />
        <p>休闲食物</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/2.png" />
        <p>粮油副食</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/5.png" />
        <p>天天果园</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/3.png" />
        <p>牛奶乳品</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/4.png" />
        <p>冲调水饮</p>
      </a>
    </div>
    <div class="nav-flex">
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/6.png" />
        <p>纸巾湿巾</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/10.png" />
        <p>玩具运动</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/7.png" />
        <p>家用电器</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/8.png" />
        <p>厨房用品</p>
      </a>
      <a href="javascript:" class="flex-1">
        <img src="@/images/home/9.png" />
        <p>汽车用品</p>
      </a>
    </div>
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
.nav-main {
  width: 100%;
  margin: 0 auto 1rem auto;
  max-width: 640px;
}
.nav-flex {
  display: flex;
  margin: 1.5rem 1rem 0 1rem;
}
.flex-1 {
  flex: 1;
  text-align: center;
  margin-left: 0.5rem;
}
.flex-1:first-child {
  margin-left: 0;
}
.flex-1 img {
  display: block;
  width: 100%;
}
.flex-1 p {
  color: #7d7e80;
  font-size: 12px;
  word-break: break-all;
  margin-top: 8px;
}
</style>
