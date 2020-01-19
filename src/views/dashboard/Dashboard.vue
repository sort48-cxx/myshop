<template>
  <div id="dashboard">
    <van-tabbar
      v-model="active"
      :safe-area-inset-bottom="true"
      class="active_tab"
      active-color="#ffb923"
    >
      <!-- 给购物车的Tabbar加个ID 方便做加入购物车的小球动画 -->
      <van-tabbar-item
        v-for="(item,index) in tabbars"
        :key="index"
        :id="index==3?'buycar':''"
        @click="tab(index,item.name)"
      >
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal" />
        </template>
      </van-tabbar-item>
    </van-tabbar>

    <!-- 缓存界面选择加载 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script type="text/javascript">
import { Tabbar, TabbarItem } from 'vant'

export default {
  name: 'DashBoard',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: 'home',
          title: '首页',
          normal: require('@/images/tabbar/home_default.png'),
          active: require('@/images/tabbar/home_selected.png')
        },
        {
          name: 'category',
          title: '分类',
          normal: require('@/images/tabbar/category_default.png'),
          active: require('@/images/tabbar/category_selected.png')
        },
        // {
        //   name: 'eat',
        //   title: '吃什么',
        //   normal: require('@/images/tabbar/eat_default.png'),
        //   active: require('@/images/tabbar/eat_selected.png')
        // },
        {
          name: 'cart',
          title: '购物车',
          normal: require('@/images/tabbar/shoppingcart_default.png'),
          active: require('@/images/tabbar/shoppingcart_selected.png'),
          num: 5
        },
        {
          name: 'mine',
          title: '我的',
          normal: require('@/images/tabbar/mine_default.png'),
          active: require('@/images/tabbar/mine_selected.png')
        }
      ]
    }
  },
  methods: {
    tab (index, val) {
      this.currIndex = index
      this.$router.push(val)
    }
  }
}
</script>

<style scoped>
.van-tabbar-item__icon img{display:block;height:22px}
</style>
