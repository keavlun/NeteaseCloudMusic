<template>
  <div class="login">
    <i class="logo">&#xe600;</i>
    <div class="user-login">
      <van-cell-group>
        <van-field
          v-model="userInfo.phone"
          label="手机号"
          placeholder="请输入手机号"
          required
          type="tel"
          size="large"
          maxlength="11"
          id="ipt"
        />
        <van-field
          v-model="userInfo.password"
          :type="inputType"
          label="密码"
          placeholder="请输入密码"
          required
          @keyup.enter="loginClick"
          ref="password"
          id="pwd"
        />
      </van-cell-group>
      <div class="view-click" @click="viewClick">
        <i class="view" v-if="isShow">&#xe6f6;</i>
        <i class="view" v-else>&#xe671;</i>
      </div>
     
      

      <van-button class="btn-login" round color="#C30F18" size="large" @click="loginClick">点击登录</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Field } from "vant";
import { Button } from "vant";
import { log } from "util";
import { Dialog } from "vant";
import { NumberKeyboard } from "vant";

export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        phone: "",
        password: null
      },
      isShow: true,
      inputType: "password",
      show: true
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [NumberKeyboard.name]: NumberKeyboard
  },
  methods: {
    loginClick() {
      let params = {
        phone: this.userInfo.phone,
        password: this.userInfo.password
      };
      if (this.userInfo.phone && this.userInfo.password) {
        this.testPhone
          ? this.$store.dispatch("Login", params)
          : Dialog.alert({
              message: "手机号格式错误请重试"
            }).then(() => {
              // on close
              console.log("正则表达式验证失败");
              this.userInfo.phone = null;
              this.userInfo.password = null;
            });
      } else {
        Dialog.alert({
          message: "手机号和密码不能为空，请重试！"
        }).then(() => {
          // on close
        });
      }
      setTimeout(() => {
        console.log(this.$store.state.code);
        if (this.$store.state.code == 502) {
          Dialog.alert({
            message: "密码错误，请重试"
          }).then(() => {
            this.userInfo.phone = null;
            this.userInfo.password = null;
          });
        } else if (this.$store.state.code == 101) {
          Dialog.alert({
            message: "账号或密码错误，请重试"
          }).then(() => {
            this.userInfo.phone = null;
            this.userInfo.password = null;
          });
        } else {
          this.$router.replace("/discover");
        }
      }, 500);
    },
    viewClick() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.inputType = "password";
      } else {
        this.inputType = "text";
      }
    },
  },
  //TODO:使用正则表达式验证手机号和密码的格式----------------------------------------------    |思路：vant 上的属性是props 属性前面加：里面的值写到data中，然后再对data中的值进行操作     |   |_______________________________________________________________________________|

  computed: {
    testPhone() {
      const TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      return TEL_REGEXP.test(this.userInfo.phone);
    }
  },
  mounted() {
    document.getElementById("ipt").focus();
  }
};
</script>

<style scoped>
.login {
  height: 100%;
}
.logo {
  font-family: "iconfont";
  font-style: normal;
  font-size: 80px;
  color: #c30f18;
  display: block;
  text-align: center;
  margin-top: 100px;
}

.user-login {
  margin-top: 30px;
  padding: 0 50px;
  font-size: 1px;
}
.btn-login {
  margin-top: 40px;
}
.view-click {
  position: absolute;
  top: 280px;
  right: 60px;
}
.view {
  font-family: "iconfont";
  font-size: 16px;
  font-style: normal;
  display: block;
  color: #999;
}
</style>
