<template>
  <div id="couponList">
    <van-nav-bar
      title="我的优惠券"
      :fixed="true"
      :border="false"
      @click-left="onClickLeft"
      left-arrow
      style="height:2.5rem"
    />

    <van-coupon-list
      :coupons="coupons"
      style="margin-top:3rem"
      input-placeholder="请输入520it兑换"
      @exchange="onExchange"
      :border="false"
    />
  </div>
</template>

<script>
import { NavBar, CouponCell, CouponList } from 'vant'

export default {
  data () {
    return {
      coupons: [
        {
          // 优惠券信息
          available: 1,
          condition: '无使用门槛\n最多优惠1.5元',
          reason: '',
          value: 150,
          name: '优惠券 ',
          startAt: 1549104000,
          endAt: 1614592000,
          valueDesc: '1.5',
          unitDesc: '元'
        },
        {
          // 优惠券信息
          available: 1,
          condition: '无使用门槛\n最多优惠2元',
          reason: '',
          value: 200,
          name: '优惠券 ',
          startAt: 1549104000,
          endAt: 1614592000,
          valueDesc: '2',
          unitDesc: '元'
        }
      ]
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [CouponList.name]: CouponList,
    [CouponCell.name]: CouponCell
  },
  methods: {
    // 返回到上个界面
    onClickLeft () {
      this.$router.go(-1)
    },

    onExchange (code) {
      // 兑换优惠券
      if (code === '520it') {
        this.coupons.push(this.coupons[0])
      }
    }
  }
}
</script>

<style scoped>
#couponList {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
}
.van-icon {
  color: #dedede;
}
.van-nav-bar__title {
  color: black;
}
</style>
