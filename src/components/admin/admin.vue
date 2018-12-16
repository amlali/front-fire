<template>
<div>
    <div>
        <div v-if="this.$store.state.loading.showProgressBar"
          class="progress-bar" role="progressbar" style="height:5px;" 
          v-bind:style="{width:loadingProgress+'%'}"></div>
        <menu-bar></menu-bar>

    <div class="slim-body">
    <div class="slim-sidebar">
         <ul class="nav nav-sidebar">
          <li class="sidebar-nav-item with-sub">
            <a href="" class="sidebar-nav-link active"><i class="icon ion-ios-home-outline"></i> Admin</a>
            <ul class="nav sidebar-nav-sub">
              <li class="nav-sub-item" @click="swtichToAdmin()" v-bind:class="{active: isAdmin}"><a href="#" class="nav-sub-link">Add Admin</a></li>
              <li class="nav-sub-item" @click="switchToStackholder()" v-bind:class="{active: isStackholder}"><a href="#" class="nav-sub-link">Add Stackholder</a></li>
            </ul>
          </li>
          </ul>
          
    </div>

    
     <div class="slim-mainpanel">
         <div class="container">
                  <create-admin v-if="isAdmin"></create-admin>
                  <create-stackholder v-if="isStackholder"></create-stackholder>
                 
           </div>
     </div>
    </div>
          

</div>
   

        </div>
</template>

<script>
import Alert from '../../partials/Alert'
import createAdmin from './createAdmin.vue'
import createStackholder from './createStackholder.vue'
import menu from '../../partials/menu.vue'
export default {
    components:{
        'create-stackholder':createStackholder,
        'create-admin':createAdmin,
        'menu-bar':menu,
        Alert
    },
    computed:{
         loadingProgress:{
             get(){
                console.log(this.$store.state.loading.loadingProgress);
              
                 return this.$store.state.loading.loadingProgress;
             }
        }
    },
    data:function(){
        return{
            isAdmin:true,
            isStackholder:false
        }
    },
    methods:{
        swtichToAdmin: function(){
            this.isAdmin = true;
            this.isStackholder = false;
           
        },
    
        switchToStackholder: function(){
            this.isAdmin = false;
            this.isStackholder = true;
            
        }
    },
     created(){
        this.$store.dispatch('clearMessages');
      if(this.$store.state.user.ticket===""){
        this.$router.replace('/')
        }
    },
}
</script>
