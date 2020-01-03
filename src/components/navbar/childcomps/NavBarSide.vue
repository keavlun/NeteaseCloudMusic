<template>
  <div class="side">
    <div class="login">
      <!-- <div v-if="loginInfo">{{loginInfo}}</div> -->
      <div  class="user-login">
        <van-row type="flex" justify="center">
          <van-col span="18">
            <van-button round color="#C30F18" size="large" @click="loginClick">点击登录</van-button>
          </van-col>
        </van-row>
      </div>
      <van-popup v-model="isShow" position="bottim" :style="{ height: '100%',width: '100%' }"/>
    </div>
  </div>
</template>

<script>

import Vue from "vue";
import { Button } from "vant";
import { Row, Col } from "vant";
import { Popup } from 'vant';

export default {
  name: "NavBarSide",
  data() {
    return {
      phone: "",
      password: "",
      loginInfo: {},
      isShow: false
    };
  },
  props:{

  },
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Popup.name]: Popup
  },
  created() {
    
  },
  methods: {
    loginClick(){
      this.$router.replace('/login')
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
}
.user-login {
  height: 30vh;
  width: 100%;
  background-color: #999;
  padding-top: 80px;
}
</style>
