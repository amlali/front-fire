<template>
 
 <div class="">
     
     <div v-if="this.$store.state.loading.showProgressBar"
          class="progress-bar" role="progressbar" style="height:5px;" 
          v-bind:style="{width:loadingProgress+'%'}"></div>
<div class="signin-wrapper">

      <div class="signin-box">
        <h2 class="slim-logo"><a href="#">Firewall<span>.</span></a></h2>
        <h2 class="signin-title-primary">Welcome back!</h2>
        <h3 class="signin-title-secondary">Sign in to continue.</h3>
         <alert v-if="this.$store.state.Alert.showAlert"></alert>
        <div class="form-group">
          <input type="text" 
          class="form-control"
           placeholder="Fullname"
           v-model="userData.fullname"
            @click="resetform()"
            @input="resetMessages()">
        </div><!-- form-group -->
        <div class="form-group mg-b-50 ">
            <div class="buttonInside">
          <input 
          class="form-control" 
          placeholder="Password"
          v-model="userData.password"
          @click="resetform()"
          @input="resetMessages()"
          :type="!showPassword ? 'password' : 'text'">
         <span id="showPassword" class="Showbutton" ><i class="fa fa-eye" v-if="!showPassword" @click="showPass()"></i>
         <i class="fa fa-eye-slash" v-if="showPassword" @click="showPass()"></i>
         </span>
         </div>
        </div><!-- form-group -->
        <button 
        class="btn btn-success btn-block btn-signin"
        @click="onSubmit()">Sign In</button>
      </div><!-- signin-box -->

    </div><!-- signin-wrapper -->

  </div>

</template>

<script>
import Alert from '../../partials/Alert'
import regex from '../../mixins/regex.vue'

export default {
    mixins:[regex],
    components:{
         'alert':Alert,
       
        
    },computed:{
         loadingProgress:{
             get(){
                console.log(this.$store.state.loading.loadingProgress);
                
                 return this.$store.state.loading.loadingProgress;
             }
         }
    },
    data:function(){
        return{
            
           messages:[],
           activateNewAccount:false,
           errorMessage:{error:'Invalid Fullname or password'},
           isnotValidForm:false,
           showPassword:false,
            userData:  {
                fullname:'',
                password:''

            }
        };
        

    },methods:{
        validateform(){
            console.log('validateform');
            if(this.isValid(this.userData.fullname,this.regex.fullname)&&this.isValid(this.userData.password,this.regex.password))
            {
                console.log('valide');
                
                return true
            }
            else{
                console.log('in valid');
                return false;
            } 

        },
         onSubmit(){
             this.resetMessages();

             if(!this.validateform()){
                 console.log('onSubmit');
                 this.isnotValidForm=true;
                 this.$store.dispatch('setResMessages',{error:this.errorMessage.error,color:"alert alert-danger"});
             }
             else{
                this.$store.dispatch('clearMessages');
                this.$store.dispatch('signin',this.userData);
            
              }
              

         },
         isValid (value,reg){
          console.log('inside isValid');
          return RegExp(reg,'g').test(value)
        },
         resetform(){
           this.isnotValidForm=false;
        },
        resetMessages(){
            this.$store.dispatch('clearMessages');
        },
        showPass(){
            console.log();
            if( this.showPassword){
                 this.showPassword=false
            }
            else{
                this.showPassword=true;
            }
            
            
        },
        

        },
        created(){
              this.$store.dispatch('redirect');               
              this.$store.dispatch('clearMessages');
        }
        
      
        
}
 
  

</script>
<style scoped>
.buttonInside{
  position:relative;
  margin-bottom:10px;
}
.Showbutton{
  position:absolute;
  right: 10px;
  top: 10px;
  border:none;
  height:25px;
  width:25px;
  text-align:center;
  padding:2px;
}
button:hover{
  cursor:pointer;
}
</style>
