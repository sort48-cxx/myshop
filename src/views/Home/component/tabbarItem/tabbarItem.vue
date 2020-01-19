<template>
  <div class="layout">
    <van-tabs
      v-model="active"
      animated
      swipeable
      sticky
      :border="false"
      :offset-top="47"
      color="#ffb923"
    >
      <van-tab title="全部">
        <productItem></productItem>
      </van-tab>
      <van-tab title="晚餐"><productItem></productItem></van-tab>
      <van-tab title="人气"><productItem></productItem></van-tab>
      <van-tab title="心选"><productItem></productItem></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import productItem from './productItem'

export default {
  data () {
    return {}
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    productItem
  }
}
</script>

<style scoped>
.layout {
  margin-top: 1rem;
}
</style>
