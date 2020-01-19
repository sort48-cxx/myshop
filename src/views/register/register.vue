<template>
  <div>
    <div class="header">
      <div class="arrow mshop">&#xe6ad;</div>
      <div class="title">注册</div>
      <div class="other">登录</div>
    </div>
    <div class="login-form">
      <div class="login-rows">
        <i class="mshop phone-icon">&#xec4b;</i>
        <div class="input-box">
          <input type="tel" placeholder="请输入手机号码" class="inp" name="usermobile" id="usermobile" />
        </div>
      </div>
      <div class="login-rows">
        <i class="mshop phone-icon">&#xe650;</i>
        <div class="input-box">
          <input type="text" placeholder="请输入短信验证码" class="inp" name="mobilecode" id="mobilecode" />
          <span class="code-again">
            <a href="javascript:void(0);" id="again">获取验证码</a>
          </span>
        </div>
      </div>
      <div class="login-rows">
        <i class="mshop phone-icon">&#xe634;</i>
        <div class="input-box">
          <input type="password" placeholder="请输入6-20位密码" class="inp" name="password" id="password" />
        </div>
      </div>
      <div class="remember-form">
        <input id="checkbox" name="checkbox" type="checkbox" checked />
        <label for="checkbox">注册视为阅读并同意</label>
        <span>
          <a>用户协议</a>
        </span>和
        <span>
          <a>隐私政策</a>
        </span>
      </div>
      <div class="form-btn">
        <a href="javascript:void(0);" class="btn" id="refister_mobile_btn">注&nbsp;&nbsp;册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'mshop';
  src: url('./../../fonts/iconfont.eot');
  src: url('./../../fonts/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./../..//fonts/iconfont.woff2') format('woff2'),
    url('./../../fonts/iconfont.woff') format('woff'),
    url('./../../fonts/iconfont.ttf') format('truetype'),
    url('./../../fonts/iconfont.svg#wzfont') format('svg');
}
.mshop {
  font-family: mshop;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  background-color: #fff;
  height: 2.5rem;
  line-height: 2.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  background: #ec5151;
}
.arrow {
  font-size: 1rem;
  color: #fff;
  margin-left: 0.5rem;
}
.title {
  flex: 1;
  font-size: 1.2rem;
  color: #fff;
}
.other {
  font-size: 1rem;
  color: #fff;
  margin-right: 0.5rem;
}
.login-rows {
  position: relative;
  z-index: 1;
  display: block;
  height: 2.5rem;
  background-color: #fff;
  border: solid #b3b3b3 0.05rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  margin-left: 0rem;
}
.phone-icon {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0.5rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-align: center;
  color: #ec5151;
}
.login-form {
  margin: 3.5rem 1rem 0 1rem;
}

.input-box {
  display: block;
  height: 2.5rem;
  margin: 0 0.7rem 0 2.3rem;
  position: relative;
  z-index: 1;
}
.inp {
  width: 95%;
  margin: 0.5rem 0;
  height: 1.5rem;
  border: 0 none;
  border-left: solid #eee 1px;
  font-size: 0.6rem;
  line-height: 1.95rem;
  color: #000;
  padding: 0 0 0 0.5rem;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
.code-again {
  position: absolute;
  top: 0.3rem;
  z-index: 1;
  right: 0;
  width: 4rem;
  height: 2rem;
}
.code-again a {
  color: #ec5151;
  font-weight: normal;
  display: block;
  font-size: 0.6rem;
  line-height: 2rem;
  text-align: center;
  width: 100%;
  height: 2rem;
  text-decoration: none;
}
.remember-form {
  height: 0.9rem;
  margin: 1rem 1rem 0 0;
  font-size: 0.6rem;
  position: relative;
  color: #666;
  text-align: left;
}
input[type='checkbox'] {
  position: relative;
  width: 1rem;
  height: 1rem;
  background-color: #f5f5f5;
  border: 0.05rem solid #ccc;
  -webkit-border-radius: 0.08rem;
  border-radius: 0.08rem;
  vertical-align: middle;
  user-select: text;
  -webkit-appearance: none;
}
input[type='checkbox']:checked {
  border-color: #ec5151;
  background-color: #fff;
}
.remember-form label {
  display: inline-block;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.6rem;
  vertical-align: middle;
  margin-left: 0.3rem;
}
.remember-form span {
  line-height: 0.9rem;
  vertical-align: middle;
  display: inline-block;
  height: 0.9rem;
}
input[type='checkbox'] {
  position: relative;
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  border: 0.05rem solid #ccc;
  vertical-align: middle;
}
input[type='checkbox']:checked {
  border-color: #ef3c79;
  background-color: #fff;
}
input[type='checkbox']:checked:after {
  content: '';
  position: absolute;
  left: 0.15rem;
  top: 0.14rem;
  width: 0.6rem;
  height: 0.3rem;
  border-left: 0.065rem solid #ef3c79;
  border-bottom: 0.065rem solid #ef3c79;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.form-btn {
  margin-top: 1.5rem;
}
.btn {
  display: inline-block;
  width: 100%;
  height: 2.5rem;
  padding: 0;
  font-size: 0.8rem;
  line-height: 2.5rem;
  text-align: center;
  color: #fff !important;
  background: #ec5151;
  border: none;
  border-radius: 2rem;
  text-decoration: none;
}
a,
a:hover,
a:active,
a:visited,
a:link,
a:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none;
  text-decoration: none;
}
</style>
