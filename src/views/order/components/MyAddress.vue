<template>
  <div id="myAddress">
    <!--导航栏-->
    <van-nav-bar title="我的地址" left-arrow :fixed="true" :border="true"></van-nav-bar>
    <!-- 没有数据的占位图 -->
    <div class="noDataPlaceHold">
      <img src="./../../../images/order/noAddress.png" alt />
      <span class="desc">还没有添加过地址呢,添加一个吧😄</span>
    </div>
    <!-- 联系人 -->
    <van-address-list
      v-model="chosenAddressId"
      :list="shippingAddress"
      @add="onAdd"
      @edit="onEdit"
      @select="onBackAddress"
      style="margin-top: 3rem"
      add-button-text="+ 增加新地址"
    ></van-address-list>
    <router-view></router-view>
  </div>
</template>

<script>
import { navBar, AddressList } from 'vant'
export default {
  data () {
    return {}
  },
  components: {
    [navBar.name]: navBar,
    [AddressList.name]: AddressList
  },
  methods: {
    onAdd () {
      this.$router.push({ path: '../order/myAddress/addAddress' })
		},
		onEdit () {
      this.$router.push({ path: '../order/myAddress/editAddress' })
    }
  }
}
</script>

<style scoped>
#myAddress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 200;
}
img {
  width: 40%;
  height: 20%;
}
.desc {
  color: grey;
  font-size: 0.6rem;
}
.noDataPlaceHold {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.van-address-list__add {
  bottom: 1rem;
}
.van-button--large {
  left: 15%;
  width: 70%;
  border-radius: 2rem;
  background-color: #45c763;
  border: none;
}
</style>
