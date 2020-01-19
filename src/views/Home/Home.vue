<template>
  <div>
    <!-- 搜索 -->
    <Header></Header>
    <!-- 轮播图 -->
    <Sowing></Sowing>
    <!-- 广告位 -->
    <Tips></Tips>
    <!-- 导航 -->
    <Navs></Navs>
    <!-- VIP广告位 -->
    <Vip></Vip>
    <!-- 抢购 -->
    <FlashBuy></FlashBuy>
    <!-- 特色商品 -->
    <!-- <specialZone></specialZone> -->
    <!-- 商品 -->
    <tabbarItem></tabbarItem>
  </div>
</template>

<script>
import Header from './component/header/header'
import Sowing from './component/sowing/sowing'
import Tips from './component/tips/tips'
import Navs from './component/navs/navs'
import Vip from './component/vip/vip'
import FlashBuy from './component/flashBuy/flashBuy'
import specialZone from './component/specialZone/specialZone'
import tabbarItem from './component/tabbarItem/tabbarItem'

export default {
  data () {
    return {}
  },
  components: {
    Header,
    Sowing,
    Tips,
    Navs,
    Vip,
    FlashBuy,
    // specialZone,
    tabbarItem
  }
}
</script>

<style scoped>

</style>
