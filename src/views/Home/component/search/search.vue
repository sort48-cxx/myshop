<template>
  <div>
    <div class="bb">
      <div class="layout">
        <div class="input-item">
          <svg-icon iconClass="search" class="search-icon"></svg-icon>
          <input type="text" class="search-inp" placeholder="请输入搜索的名称" />
        </div>
      </div>
    </div>
    <ul>
      <li>产品列表</li>
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
.input-item {
  position: relative;
  width: 100%;
  border-radius: 0.4rem;
  border: 1px solid #c2c2c2;
  height: 3rem;
  line-height: 3rem;
}
.bb {
  border-bottom: 1px solid #c2c2c2;
}
.search-icon {
  position: absolute;
  left: 3%;
  top: 50%;
  margin-top: -8px;
}
.search-inp {
  display: block;
  margin-left: 6%;
  border: 0px;
  font-size: 1rem;
  color: #666;
  text-indent: 10px;
  height: 2.8rem;
  line-height: 3rem;
}
.layout {
  margin: 1rem;
}
</style>
