<template>
  <div id="userCenter">
    <van-nav-bar
      title="个人资料"
      :fixed="true"
      :border="false"
      @click-left="onClickLeft"
      left-arrow
      style="height:2.5rem"
    />
    <div class="icon">
      <span class="title">头像</span>
      <img src="./../../../images/mine/defaultImg.jpeg" alt />
    </div>

    <van-cell-group>
      <van-cell title="昵称" is-link value="测试数据1" @click="goToPage('ChangeNickName')" class="t-left" />
      <van-cell title="性别" is-link value="测试数据" class="t-left" />
      <van-cell title="生日" is-link value="未填写" class="t-left" />
      <van-cell title="手机号" value="12345678904" class="t-left" />
    </van-cell-group>
    <van-button size="large" style="margin-top:1rem" @click="logOut">退出登录</van-button>
    <router-view></router-view>
  </div>
</template>

<script>
import { NavBar, CellGroup, Cell, Button } from 'vant'

export default {
  data () {
    return {}
  },
  components: {
    [NavBar.name]: NavBar,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Button.name]: Button
  },
  methods: {
    goToPage (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style scoped>
#userCenter {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
}
#userCenter .icon {
  display: flex;
  height: 3rem;
  width: 100%;
  margin-top: 3rem;
  padding: 0 16px;
  background-color: #ffffff;
  align-items: center;
}
#userCenter .icon .title {
  height: 3rem;
  line-height: 3rem;
  color: #8e8ec2;
  font-size: 14px;
}
#userCenter .icon img {
  position: absolute;
  right: 1.6rem;
  height: 2.5rem;
  width: 2.5rem;
}
.t-left {
  text-align: left;
}
</style>
