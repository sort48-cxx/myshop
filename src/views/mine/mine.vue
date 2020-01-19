<template>
  <div id="mine">
    <van-nav-bar
      title="我的"
      :fixed="true"
      :border="false"
      style="height:2.5rem;background-color: #ffb923;"
    />
    <van-cell-group style="margin-top:2.4rem">
      <van-cell
        style="background-color: #fff;color:#ffb923;"
        label-class="labelClass"
        is-link
        center
      >
        <template slot="title">
          <!-- 已登录状态 -->
          <div class="personMsg" @click="goToPage('userCenter')">
            <img class="iconImage" alt />
            <div class="sex">
              <img src="./../../images/mine/male.png" alt />
            </div>
            <div class="personInfo">
              <span class="t-left">测试数据1</span>
              <span>手机号：12345678901</span>
            </div>
          </div>
          <!-- 未登录状态 -->
          <div class="personMsg">
            <img class="iconImage" alt />
            <div class="personInfo">
              <div>立即登录</div>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>

    <!-- 订单相关-->
    <van-cell-group style="margin-top:.5rem">
      <van-cell
        title="我的订单"
        icon="label"
        value="查看全部订单"
        is-link
        class="t-left"
        @click="goToPage('MyOrder')"
      ></van-cell>
      <van-grid :border="false">
        <van-grid-item
          v-for="(order,index) in orderData"
          :key="index"
          :icon="order.icon"
          :text="order.title"
        />
      </van-grid>
    </van-cell-group>

    <van-cell-group style="margin-top:.5rem">
      <van-cell
        title="我的优惠券"
        icon="gold-coin"
        value="2张"
        @click="goToPage('couponList')"
        is-link
        class="t-left"
      />
      <van-cell
        title="我的收货地址"
        icon="todo-list"
        is-link
        @click="goToPage('myAddress')"
        class="t-left"
      />
      <van-cell title="订单" icon="todo-list" is-link @click="goToPage('order')" class="t-left" />
    </van-cell-group>

    <van-cell-group style="margin-top:0.5rem">
      <van-cell is-link icon="vip-card" @click="goToPage('myVip')" class="t-left">
        <template slot="title">
          <span class="custom-title">我的绿卡</span>
          <van-tag type="danger" :round="true" style="margin-left:.3rem">NEW</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top:0.5rem">
      <van-cell title="联系客服" icon="phone" value="09:00-22:00" is-link class="t-left" />
      <van-cell title="意见反馈" icon="comment-circle" is-link class="t-left" />
    </van-cell-group>
    <div class="version">当前版本1.10</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { NavBar, Cell, CellGroup, Grid, GridItem, Tag } from 'vant'
export default {
  data () {
    return {
      orderData: [
        { icon: 'cart-circle-o', title: '待支付' },
        { icon: 'gift-o', title: '待收货' },
        { icon: 'smile-comment-o', title: '待评价' },
        { icon: 'cash-back-record', title: '售后/退款' }
      ]
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Tag.name]: Tag
  },
  methods: {
    goToPage (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style scoped>
.t-left {
  text-align: left;
}
#mine {
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3rem;
}
#mine .version {
  margin: 0 auto;
  text-align: center;
  font-size: 0.6rem;
  background-color: #ffffff;
  height: 2rem;
  color: grey;
  line-height: 2rem;
  padding-bottom:1rem;
}
#mine .van-nav-bar {
  background-color: #3bba63;
  font-size: 0.6rem;
}
#mine .van-nav-bar__title {
  color: white;
}
#mine .personMsg {
  display: flex;
  align-items: center;
}
#mine .personMsg .sex {
  position: absolute;
  top: 3.5rem;
  left: 3.8rem;
  width: 0.1rem;
  height: 0.1rem;
}
#mine .personMsg .sex img {
  width: 1rem;
  height: 1rem;
}
#mine .personMsg img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
#mine .personMsg .personInfo {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
}
#mine .van-cell__left-icon {
  color: rgba(255,185,35, 0.8);
  font-size: 1.2rem;
}
.van-cell__title {
  color: #333;
}
.van-cell__value {
  color: #666;
}
.van-cell__right-icon {
  color: rgba(102,102,102);
}
/*转场动画*/
#mine .router-slider-enter-active,
#mine .router-slider-leave-active {
  transition: all 0.3s;
}
#mine .router-slider-enter,
#mine .router-slider-leave-active {
  transform: translate3d(2rem, 0, 0);
  opacity: 0;
}
</style>
