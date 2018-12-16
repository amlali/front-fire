<template>
     <div class="slim-header with-sidebar">
      <div class="container-fluid " >
        <div class="slim-header-left">
          <h2 class="slim-logo"><a href="#">Firewall<span>.</span></a></h2>
          <a href="" id="slimSidebarMenu" class="slim-sidebar-menu"><span></span></a>
        </div><!-- slim-header-left -->
          </div><!-- dropdown -->
            <div class="slim" >
    
             <a href="#"><span>{{this.$store.state.user.info.role}}</span></a>
             
               </div>
          <div class="dropdown dropdown-c">
            <a href="#" class="logged-user" data-toggle="dropdown">
              <img src="http://via.placeholder.com/500x500" alt="">
              <span>{{this.$store.state.user.info.fullname}}</span>
              <i class="fa fa-angle-down"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-right">
              <nav class="nav">
               <a  href=""> <li @click="onSignOut()"><i class="icon ion-forward"></i> Sign Out</li></a>
              </nav>
            </div><!-- dropdown-menu -->
          </div><!-- dropdown -->
        </div><!-- header-right -->
      
</template>

 
<script>
export default {
  methods:{  onSignOut(){
       this.$store.dispatch('signOut');
    }}
  
}
</script>
