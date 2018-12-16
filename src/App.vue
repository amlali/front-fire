<template>

  <router-view></router-view>
</template>
<script>
  import login from "./components/login/login.vue";
export default {
  components:{
    'login':login,
    
  },
  created(){
  
    console.log('#########################');
     console.log(this.$store);
 

   
     
}

}
</script>
