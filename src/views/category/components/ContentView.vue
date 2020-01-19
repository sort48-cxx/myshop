<template>
  <div class="wrapper">
    <div class="subTitleWrapper" ref="subTitleWrapper">
      <ul ref="ulContent">
        <li
          class="title"
          v-for="(detailItem,index) in categoriesDetailData"
          :key="index"
          ref="subTitle"
        >{{detailItem}}</li>
      </ul>
    </div>
    <div class="showMenu">
      <span class="downMenu">
        <svg-icon iconClass="down" style="width:1.5rem;height:1.5rem" />
      </span>
    </div>
    <DropMenu></DropMenu>
    <section class="r_list" ref="r_list">
      <div ref="b">
        <div ref="good">
          <p class="productCategoryTitle">name</p>
          <ul>
            <li class="list">
              <div class="list_item flex">
                <p>
                  <img src="https://ddimg.ddxq.mobi/becc0e6b257781528108118451.jpg" alt />
                </p>
                <div>
                  <p class="name">清美内酯豆腐 400g/盒</p>
                  <p class="des">质地细嫩 色香味均优于其他普通豆腐</p>
                  <p class="price">¥2.00</p>
                  <p class="originPrice">¥2.00</p>
                  <div class="iconCartWrapper">
                    <svg-icon iconClass="car" style="width:1.5rem;height:1.5rem"></svg-icon>
                  </div>
                </div>
              </div>
            </li>
            <li class="list">
              <div class="list_item flex">
                <p>
                  <img src="https://img.ddimg.mobi/product/2d489406e91691544062166784.jpg" alt />
                </p>
                <div>
                  <p class="name">土鸡蛋8枚</p>
                  <p class="des">民生鸡蛋 物美价廉</p>
                  <p class="price">¥6.90</p>
                  <p class="originPrice">¥6.90</p>
                  <div class="iconCartWrapper">
                    <svg-icon iconClass="car" style="width:1.5rem;height:1.5rem"></svg-icon>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="bottomTip">到底了,看看别的分类吧</div>
      </div>
    </section>
  </div>
</template>

<script>
import DropMenu from '../components/DropMenu'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      categoriesDetailData: [
        '测试数据一',
        '测试数据2',
        '测试数据3',
        '测试数据4',
        '测试数据一',
        '测试数据2',
        '测试数据3',
        '测试数据4'
      ]
    }
  },
  components: {
    // DropMenu
  },
  mounted () {
    this.$nextTick(() => {
      this._initTitleScroll()
    })
  },
  methods: {
    _initTitleScroll () {
      let contentWrapperWidth = 120
      let el = this.$refs.subTitle
      for (let i = 0; i < el.length; i++) {
        contentWrapperWidth += el[i].clientWidth
      }
      this.$refs.ulContent.style.width = contentWrapperWidth + 'px'
      this.$nextTick(() => {
        if (!this.titleScroll) {
          // 名字一定要唯一 和父组件独立
          this.titleScroll = new BScroll('.subTitleWrapper', {
            probeType: 3,
            startX: 70,
            click: true,
            scrollX: true
          })
        } else {
          this.titleScroll.refresh()
        }
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  flex: 1;
}
.subTitleWrapper {
  width: 100%;
  height: 2.8rem;
  white-space: nowrap;
  border-bottom: solid 0.01rem #e8e9e8;
  overflow: hidden;
  position: fixed;
  z-index: 999;
  top: 3.2rem;
  background-color: white;
}
.title {
  /* display: inline-block; */
  float: left;
  font-size: 0.73rem;
  padding: 1rem;
}
.selected {
  color: #3cb963;
}
.showMenu {
  position: fixed;
  width: 10%;
  height: 2.5rem;
  line-height: 2.5rem;
  right: -0.2rem;
  z-index: 1999;
  margin-top: 0.1rem;
  background-color: white;
}
.showMenu .menuIcon {
  width: 100%;
  height: 2.8re;
}

.r_list {
  position: absolute;
  left: 5.2rem;
  right: 0;
  top: 2.9rem;
  bottom: 0rem;
  overflow: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.r_list .productCategoryTitle {
  display: inline-block;
  padding: 1rem;
  border-left: 3px solid #d9dde1;
  height: 0.32rem;
  width: 100%;
  font-size: 0.73rem;
  color: #93999f;
  background-color: #f3f5f7;
  padding-left: 0.28rem;
}
.r_list .flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.r_list .list {
  padding: 0.36rem 0.36rem 0 0.36rem;
}
.r_list .list img {
  width: 4.0625rem;
  height: 4.0625rem;
  border-radius: 0.04rem;
}
.r_list .list .list_item {
  justify-content: flex-start;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  padding-bottom: 1rem;
  position: relative;
}
.r_list .list .list_item > div {
  margin-left: 0.2rem;
  text-align: left;
}
.r_list .list .list_item > div .name {
  font-size: 0.8375rem;
  line-height: 1rem;
  color: #07111b;
  margin-bottom: 0.16rem;
}
.r_list .list .list_item > div .des,
.r_list .list .list_item > div .sale {
  padding: 0.2rem;
  line-height: 0.8rem;
  font-size: 0.65rem;
  color: #93999f;
  margin-bottom: 0.16rem;
}
.r_list .list .list_item > div .sale {
  margin-bottom: 0;
}
.r_list .list .list_item > div .sale span {
  margin-left: 0.24rem;
}
.r_list .list .list_item > div .price {
  display: inline;
  font-size: 0.75rem;
  color: red;
}
.r_list .list .list_item > div .originPrice {
  display: inline;
  padding-left: 0.5rem;
  text-decoration: line-through;
  font-size: 0.6875rem;
  color: #b2b2b2;
}
.r_list .list .list_item > div .add {
  position: absolute;
  right: 0;
  bottom: 0.28rem;
}
.r_list .list .list_item > div .iconCartWrapper {
  position: absolute;
  width: 1.875rem;
  top: 3.4rem;
  right: 0.6rem;
}
.r_list .list .list_item > div .icon {
  fill: #999;
  width: 1rem;
  height: 1rem;
}
.r_list .list .list_item > div .iconCart {
  display: block;
  width: 1.5rem;
  height: 1.5rem;
}
.r_list .bottomTip {
  padding-top: 0.8rem;
  color: grey;
  font-size: 0.6rem;
  text-align: center;
}
</style>
