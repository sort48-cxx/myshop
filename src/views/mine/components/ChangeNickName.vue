<template>
  <div id="nickName">
    <van-nav-bar
      title="修改昵称"
      :fixed="true"
      :border="false"
      @click-left="onClickLeft"
      left-arrow
      @click-right="onClickSave"
      right-text="保存"
    />
    <div style="margin-top:3rem">
      <van-cell-group title="请输入新昵称">
        <van-field clearable ref="field" placeholder="nickName" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { NavBar, CellGroup, Field } from 'vant'

export default {
  data () {
    return {}
  },
  components: {
    [NavBar.name]: NavBar,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field
  }
}
</script>

<style scoped>
#nickName {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
}
</style>
