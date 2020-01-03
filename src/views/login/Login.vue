<template>
  <div class="login" @keyup.enter="loginClick">
    <i class="logo">&#xe600;</i>
    <div class="user-login">
      <van-cell-group>
        <!-- <van-field
          v-model="userInfo.phone"
          label="手机号"
          placeholder="请输入手机号"
          required
          type="tel"
          size="large"
          maxlength="11"
        class="ipt"
        />
        <van-field
          v-model="userInfo.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
       
        /> -->
<van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
        
      </van-cell-group>
      <van-button class="btn-login" round color="#C30F18" size="large" @click="loginClick">点击登录</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Field } from "vant";
import { Button } from "vant";

export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        phone: null,
        password: null
      }
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    loginClick() {
      let params = {
        phone: this.userInfo.phone,
        password: this.userInfo.password
      };
      this.$store
        .dispatch("Login", params)
    }
  }
};
</script>

<style scoped>
/* .ipt { */
  /* height: 100vh - 46px; */
  /* display: inline-block; */
  /* height: 24px;
  padding: 0; */
  /* display: inline-block */
  /* position: relative;
  top: 3px;
} */
/* .ipt input{ */
  /* display: block !important;
  height: 24px !important; */
  /* line-height: 24px !important; */
  /* margin-top: 3px !important; */
/* } */

.logo {
  font-family: "iconfont";
  font-style: normal;
  font-size: 80px;
  color: var(--color-high-text);
  display: block;
  text-align: center;
  margin-top: 50px;
}

.user-login {
  margin-top: 30px;
  padding: 0 50px;
  font-size: 1px;
  /* background-color: var(--color-tint); */
}
.btn-login {
  margin-top: 40px;
}
</style>
