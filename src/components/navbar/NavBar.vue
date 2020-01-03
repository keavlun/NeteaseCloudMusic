<template>
  <div class="nav-bar">
    <van-nav-bar :border="false" class="navbar-main">
      <van-icon slot="left" name="wap-nav" size="30" color="black" @click="showPopup" />
      <div slot="title" class="navbar-title">
        <ul>
          <li
            v-for="(item, index) in page"
            :key="index"
            @click="itemClick(index)"
            :class="currentIndex == index ? 'active':'' "
          >{{item.name}}</li>
        </ul>
      </div>
      <van-icon slot="right" name="search" size="26" color="black" />
    </van-nav-bar>
    <van-popup
      v-model="show"
      position="left"
      get-container=".nav-bar"
      :style="{ width: '85%', height: '100%' }"
    >
      <nav-bar-side></nav-bar-side>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Icon } from "vant";
import { log } from "util";
import { Popup } from "vant";

import NavBarSide from "./childcomps/NavBarSide";

export default {
  name: "NavBar",
  data() {
    return {
      page: [
        { name: "我的", path: "/profile" },
        { name: "发现", path: "/discover" },
        { name: "云村", path: "/clouds" },
        { name: "视频", path: "/video" }
      ],
      isActive: false,
      currentIndex: 1,
      show: false
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    NavBarSide
  },
  methods: {
    itemClick(index) {
      if (this.$route.path != this.page[index].path) {
        this.$router.replace(this.page[index].path);
        this.currentIndex = index;
      }
      // console.log(this.$route.path);
    },
    showPopup() {
      this.show = true;
    },
    loginClick() {
      this.show = false;
      this.currentIndex = 0;
    }
  }
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
}
.nav-bar ul {
  display: flex;
}
.nav-bar ul li {
  flex: 1;
}
.navbar-title {
  font-weight: 400;
}
.active {
  font-size: 20px;
  font-weight: 500;
}
</style>
