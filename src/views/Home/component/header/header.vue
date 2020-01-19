<template>
  <div class="wrapper">
    <div>
      <div class="in-item1-box">
        <div class="item1-d1">
          <svg-icon iconClass="location"></svg-icon>
          <router-link to="/dashboard/map" tag="span" class="address">请选择位置..</router-link>
          <svg-icon iconClass="up_real"></svg-icon>
        </div>
        <div class>
          <div class="item1-d2">
            <svg-icon iconClass="search"></svg-icon>
            <router-link to="/dashboard/search" tag="span">输入商品名称</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style scoped>
.in-item1-box {
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  overflow: hidden;
  width: 100%;
  z-index: 3;
  background-color: #fff;
  padding-top: 1rem;
}
.item1-d1 {
  float: left;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2rem;
  height: 2rem;
  line-height: 2rem;
  color: #fff;
  font-size: 0.8rem;
  margin-left: 1.5%;
}
.in-item1-box span {
  margin: 0 0.5rem;
}
.item1-d2 {
  float: left;
  width: 54%;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: #f2f2f2;
  vertical-align: middle;
  border-radius: 2rem;
  border: 0;
  font-size: 0.8rem;
  margin: 0 1.5%;
  color: #999;
}
</style>
