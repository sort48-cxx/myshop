<template>
  <div id="search">
    <div class="s-box">
      <div class="s-inp-item">
        <svg-icon iconClass="search"></svg-icon>
        <input type="text" class="s-inp" placeholder="搜索菜谱、食材" />
      </div>
      <div class="s-right">
        <svg-icon iconClass="file"></svg-icon>
      </div>
    </div>
    <div class="todayMenu">今日菜单</div>
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
#search {
    padding: .5rem .625rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}
.s-box {
  display: flex;
}
.s-inp-item {
  background-color: #f2f2f2;
  border-radius: 2rem;
  height: 2rem;
  line-height: 2rem;
  width: 100%;
  flex: 1;
  text-align: left;
  padding-left: 1rem;
}
.s-inp {
  background-color: #f2f2f2;
  border: 0px;
  border-radius: 2rem;
  text-indent: 10px;
  font-size: 1rem;
  color: #666;
  text-align: left;
}
.s-right {
  line-height: 2rem;
  width: 20px;
  height: 20px;
  margin-left: 0.5rem;
}
.todayMenu {
  margin-top: 0.9rem;
  padding-left: 0.4rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-left: 0.25rem solid #75a342;
  font-size: 0.6728rem;
  font-weight: 2000px;
  margin-left:1rem;
  text-align: left;
}
</style>
