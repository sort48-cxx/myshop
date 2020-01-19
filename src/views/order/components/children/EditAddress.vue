<template>
  <div id="addAddress">
    <van-nav-bar title="添加地址" left-arrow :fixed="true" :border="true"></van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      save-button-text="保存并使用"
      @save="onSave"
      style="margin-top:3rem"
    />
  </div>
</template>

<script>
import { NavBar, AddressEdit } from 'vant'
export default {
  data () {
    return {}
  },
  components: {
    [NavBar.name]: NavBar,
    [AddressEdit.name]: AddressEdit
  }
}
</script>

<style scoped>
#addAddress {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 99999;
}
.van-button {
  background-color: #45c763;
}
</style>
