<template>
  <div>
    <div class="bb">
      <div class="s-box">
        <div class="s-icon">
          <svg-icon iconClass="search"></svg-icon>
        </div>
        <input type="text" class="s-inp" placeholder="输入商品名称"/>
      </div>
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
.bb {
  border-bottom: 1px solid #e6e6e6;
}
.s-box {
  background-color: #f2f2f2;
  border-radius: 2rem;
  display: flex;
  margin: .5rem 1rem;
}
.s-icon {
  width: 15px;
  height: 15px;
  line-height: 2.2rem;
  margin-left: 1rem;
}
.s-inp {
  border: 0;
  height: 2rem;
  line-height: 2rem;
  text-indent: 10px;
  text-align: left;
  font-size: 1rem;
  color: #666;
  background-color: #f2f2f2;
  flex: 1;
  display: block;
  border-radius: 2rem;
}
</style>
