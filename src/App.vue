<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 禁止手机端扩大和缩小手势
window.onload = function () {
  document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function (event) {
    event.preventDefault()
  })
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.my-bullet-active {
  background: #ffb923 !important;
  opacity: 1 !important;
}
</style>
