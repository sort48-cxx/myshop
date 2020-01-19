<template>
  <div class="cart">
    <header class="titleWrapper">
      <h4>
        <strong>购物车</strong>
      </h4>
      <div class="clearCart" style="color:grey">删除</div>
    </header>
    <div class="cartWrapper">
      <!-- 购物车为空 -->
      <div class="emptyCart" v-show="!isShowEmptyCart">
        <img src="./../../images/cart/empty.png" alt />
        <div class="title">购物车空空滴~</div>
        <router-link to="/dashboard/home" class="goHome">去逛逛</router-link>
      </div>

      <!-- 购物车有数据 -->
      <div class="contentWrapper">
        <div class="contentWrapperList">
          <section>
            <div class="shopCartListCon">
              <div class="left">
                <a href="javaScript:;" class="cartCheckBox"></a>
              </div>
              <div class="center">
                <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
              </div>
              <div class="right">
                <a>测试数据1</a>
                <div class="bottomContent">
                  <p class="shopPrice">测试数据2</p>
                  <div class="shopDeal">
                    <span>-</span>
                    <input type="number" disabled />
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="shopCartListCon">
              <div class="left">
                <a href="javaScript:;" class="cartCheckBox"></a>
              </div>
              <div class="center">
                <img src="https://ddimg.ddxq.mobi/abf3023fb51611526109391551.jpg" />
              </div>
              <div class="right">
                <a>测试数据1</a>
                <div class="bottomContent">
                  <p class="shopPrice">测试数据2</p>
                  <div class="shopDeal">
                    <span>-</span>
                    <input type="number" disabled />
                    <span>+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- 提交订单 -->
      <van-submit-bar :price="3050" button-text="提交订单">
        <van-checkbox checked-color="#45c763">全选</van-checkbox>
      </van-submit-bar>

      <!-- 猜你喜欢 -->
      <van-divider :style="{ color: 'black', borderColor: 'grey', padding: '0 16px' }">猜你喜欢</van-divider>
      <produceItem :style="isShowEmptyCart?'padding-bottom:5.5rem':'padding-bottom:3rem'" />
    </div>
  </div>
</template>

<script>
import { SubmitBar, Checkbox, Divider } from 'vant'
import ProduceItem from './../Home/component/tabbarItem/productItem'

export default {
  data () {
    return {}
  },
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Divider.name]: Divider,
    ProduceItem
  }
}
</script>

<style scoped>
.cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.cart .titleWrapper {
  width: 100%;
  height: 2.6rem;
  background: #fff;
  -webkit-background-size: 0.1rem 4.4rem;
  background-size: 0.1rem 4.4rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart .titleWrapper .clearCart {
  position: absolute;
  right: 0.3rem;
  font-size: 0.8rem;
}
.cart .disableClearCart {
  color: grey;
}
.cart .cartWrapper {
  width: 100%;
  height: 100rem;
  margin-top: 2.6rem;
}
@media screen and (min-width: 300px) and (max-width: 374px) {
  .cart .cartWrapper .van-submit-bar {
    bottom: 3.3rem;
  }
}
@media screen and (min-width: 375px) and (max-width: 420px) {
  .cart .cartWrapper .van-submit-bar {
    bottom: 2.7rem;
  }
}
@media screen and (min-width: 420px) and (max-width: 1024px) {
  .cart .cartWrapper .van-submit-bar {
    bottom: 1.4rem;
  }
}
.cart .cartWrapper .emptyCart {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cart .cartWrapper .emptyCart img {
  padding-top: 2rem;
  width: 50%;
  height: 8rem;
  margin: 0 auto;
}
.cart .cartWrapper .emptyCart .title {
  text-align: center;
  padding: 0.5rem;
}
.cart .cartWrapper .emptyCart .goHome {
  margin-top: 2rem;
  color: white;
  background-color: #45c763;
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem;
  width: 5rem;
  height: 1rem;
  line-height: 1rem;
  border-radius: 1rem;
}
.cart .cartWrapper .contentWrapper {
  padding-top: 0.5rem;
}
.cart .cartWrapper .contentWrapper section {
  background-color: #ffffff;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon {
  display: flex;
  height: 6rem;
  border-bottom: 0.01rem solid #e0e0e0;
  margin-bottom: 0.7rem;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon .left {
  flex: 1;
  display: flex;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon .left a {
  display: inline-block;
  margin-top: 0.8rem;
  margin-left: 0.5rem;
}
.cart
  .cartWrapper
  .contentWrapper
  section
  .shopCartListCon
  .left
  .cartCheckBox {
  background: url('./../../images/cart/shop-icon.png') no-repeat;
  background-size: 2.5rem 5rem;
  width: 1rem;
  height: 1rem;
}
.cart
  .cartWrapper
  .contentWrapper
  section
  .shopCartListCon
  .left
  .cartCheckBox[checked] {
  background-position: -1.2rem 0;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon .center {
  flex: 3;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon .center img {
  width: 100%;
  height: 100%;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon .right {
  flex: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  position: relative;
}
.cart .cartWrapper .contentWrapper section .shopCartListCon .right a {
  height: 2.2rem;
  line-height: 1.2rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
  color: #000;
}
.cart .cartWrapper .contentWrapper section .bottomContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.cart .cartWrapper .contentWrapper section .bottomContent .shopPrice {
  font-size: 0.8rem;
}
.cart .cartWrapper .contentWrapper section .bottomContent .shopDeal span {
  width: 1rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  float: left;
}
.cart .cartWrapper .contentWrapper section .bottomContent .shopDeal input {
  float: left;
  width: 2rem;
  height: 1.2rem;
  text-align: center;
  margin: 0 0.2rem;
  font-size: 0.8rem;
  background-color: #f5f5f5;
  border: 0;
}
.cart .van-checkbox {
  margin-left: 0.5rem;
}
</style>
