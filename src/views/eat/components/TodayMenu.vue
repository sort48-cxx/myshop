<template>
  <div>
    <div id="todayMenu">
      <div class="todayMenuWrapper">
        <div class="menuList">
          <ul ref="menuUlContent">
            <li class="menuItem">测试数据-1</li>
            <li class="menuItem">测试数据-2</li>
            <li class="menuItem">测试数据-3</li>
          </ul>
        </div>
      </div>
      <MenuWaterFall></MenuWaterFall>
    </div>
  </div>
</template>

<script>
import MenuWaterFall from './MenuWaterFall'

export default {
  data () {
    return {}
  },
  components: {
    MenuWaterFall
  }
}
</script>

<style scoped>
#todayMenu {
  width: 100%;
  margin-top: 6.5rem;
  overflow: hidden;
  margin-bottom: 3rem;
}
#todayMenu .todayMenuWrapper {
  width: 100%;
  height: 1.5rem;
  white-space: nowrap;
  border-bottom: solid 0.01rem #e8e9e8;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  top: 5rem;
  background-color: white;
  padding-bottom: 0.5rem;
}
#todayMenu .todayMenuWrapper .menuList {
  width: 100%;
  overflow: hidden;
  margin-right: 0.5rem;
}
#todayMenu .todayMenuWrapper .menuList .menuItem {
  margin-left: 0.5rem;
  float: left;
  font-size: 0.73rem;
  padding: 0.4rem;
  border: 1px solid #dedede;
  border-radius: 0.6rem;
  padding: 0.3rem;
}
#todayMenu .todayMenuWrapper .menuList .selected {
  color: #3cb963;
  border: 1px solid #3cb963;
}
#todayMenu .todayMenuWrapper .menuAll {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 0.9rem;
  font-size: 0.6rem;
  color: gray;
}
#todayMenu .todayMenuWrapper .menuAll .downMenu {
  width: 1rem;
  height: 1rem;
}
</style>
