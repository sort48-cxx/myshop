<template>
  <div>
    <SearchHead></SearchHead>
    <div class="listWrapper">
      <div class="leftWrapper">
        <ul class="wrapper">
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据1</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据2</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据3</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据4</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据1</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据2</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据3</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据4</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据1</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据2</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据3</span>
          </li>
          <li class="categoryItem" ref="menuList">
            <span class="textWrapper">测试数据4</span>
          </li>
        </ul>
      </div>
      <!--右边-->
      <ContentView></ContentView>
    </div>
  </div>
</template>

<script>
import SearchHead from '../category/components/SearchHead'
import ContentView from '../category/components/ContentView'
import BScroll from 'better-scroll'

export default {
  data () {
    return {}
  },
  components: {
    SearchHead,
    ContentView
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.scroll) {
        // 名字一定要唯一 和父组件独立
        this.scroll = new BScroll('.leftWrapper', {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style scoped>
.listWrapper {
  display: flex;
  position: absolute;
  top: 3.2rem;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
}

.leftWrapper {
  background-color: #f4f4f4;
  width: 5.3125rem;
  flex: 0 0 5.3125rem;
}

.categoryItem {
  padding: 0.75rem 0;
  border-bottom: solid 0.01rem #e8e9e8;
  position: relative;
}

.categoryItem .textWrapper {
  line-height: 1.25rem;
  border-left: solid 0.1875rem transparent;
  padding: 0.3125rem 0.6875rem;
  font-size: 0.8125rem;
  color: #666666;
}

.categoryItem.selected {
  background: #fff;
}

.categoryItem.selected .textWrapper {
  border-left-color: #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}
</style>
