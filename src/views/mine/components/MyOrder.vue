<template>
  <div id="Order">
    <van-nav-bar
      title="我的订单"
      :border="false"
      :fixed="true"
      @click-left="onClickLeft"
      left-arrow
      style="height:2.5rem"
    />
    <van-tabs
      v-model="active"
      animated
      swipeable
      sticky
      :border="false"
      :offset-top="47"
      ref="tabs"
      type="line"
      color="#28BE57"
      title-active-color="#28BE57"
      animated:yes
    >
      <!-- 全部 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[0]}}</span>
        </div>
        <OrderType></OrderType>
      </van-tab>
      <!-- 待支付 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[1]}}</span>
        </div>2
      </van-tab>
      <!-- 待收货 -->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[2]}}</span>
        </div>3
      </van-tab>
      <!-- 待评价-->
      <van-tab>
        <div slot="title">
          <span>{{itemsTitle[3]}}</span>
        </div>4
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { NavBar, Tab, Tabs } from 'vant'
import OrderType from '../components/OrderType'

export default {
  data () {
    return {
      itemsTitle: ['全部', '待支付', '待收货', '待评价']
    }
  },
  components: {
    [NavBar.name]: NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    OrderType
  }
}
</script>

<style scoped>
#Order {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 999;
}
</style>
