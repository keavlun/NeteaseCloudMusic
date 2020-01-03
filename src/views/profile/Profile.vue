<template>
  <div>
    <div >
    我的
    </div>
    
   
  </div>
</template>

<script>
// import { phoneLogin, isLogin } from "../../network/navbar"
import { log } from 'util';


export default {
  name: "Profile",
  data() {
    return {
      isLogin:null,

    };
  },
  components: {},
  created() {
    // this.phoneLogin(this.$store.state.phone, this.$store.state.password);
    // this.phoneLogin('13012270670', 'vgbhn..333286');
    
      // this.$store.dispatch()
    
    // this.phoneLogin()
  },
  updated(){
    if(!this.isLogin){
        this.$router.replace("/profile/login"); 
    }else{
      this.$router.replace("/profile"); 
      console.log(this.isLogin);
    }
  },
  methods: {
    // phoneLogin(phone, password) {
    //   phoneLogin(phone, password).then(res => {
    //     console.log(res);
    //     this.isLogin = res;
    //   });
    // }

    // phoneLogin(){
    //   this.$store.dispatch("userLogo").then(res =>{
    //     this.isLogin = res;

    //   })
    // }
  }
};
</script>

<style scoped>
</style>
