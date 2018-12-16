<template>
 
 <div class="">
     <div v-if="this.$store.state.loading.showProgressBar"
          class="progress-bar" role="progressbar" style="height:5px;" 
          v-bind:style="{width:loadingProgress+'%'}">
          </div>
<div class="signin-wrapper">

      <div class="signin-box">
        <h2 class="slim-logo"><a href="#">ResetPassword<span>.</span></a></h2>
          
        <h3 class="signin-title-secondary">please change your password for first time.</h3>
         <alert v-if="this.$store.state.Alert.showAlert" ></alert>
        <div class="form-group mg-b-50 ">
            <div class="buttonInside">
                <input 
                    :type="!showPassword ? 'password' :'text'" 
                    class="form-control" 
                    placeholder="Password"
                    v-model="userData.password.value"
                    required
                    @input="validateProperty(userData.password,regex.password)"
                    @click="resetform()">
                <error-message 
                    v-if="userData.password.touched && !userData.password.valid" 
                    :errorMessage="errorMessages.password">
                    </error-message>     
  
                <span id="showPassword" class="Showbutton" ><i class="fa fa-eye" v-if="!showPassword" @click="showPass()"></i>
                <i class="fa fa-eye-slash" v-if="showPassword" @click="showPass()"></i>
                </span>
         </div>
        </div><!-- form-group -->
        <div class="form-group mg-b-50 ">
       
        <input 
          class="form-control" 
          placeholder="confirm Password"
          v-model="userData.rePassword.value"
          required
          @click="resetform()"
          @input="isPasswordMatched()"
          type="password">

        <error-message 
            v-if="userData.rePassword.touched && !userData.rePassword.valid" 
            :errorMessage="errorMessages.rePassword">
            </error-message> 

        </div><!-- form-group -->
        <button 
        class="btn btn-success btn-block"
        @click="onSubmit()" 
        :disabled="!isFormValide()"
        data-target="#myModal"
        data-toggle="modal">Reset password</button>
      </div><!-- signin-box -->

    </div><!-- signin-wrapper -->
   
  </div>

</template>

<script>
import error from "../../partials/error.vue"
import Alert from '../../partials/Alert'
import regex from '../../mixins/regex.vue'
import validationMixins from '../../mixins/validationMixins.vue'
import errorMessages from '../../mixins/errorMessages.vue'
export default {
    mixins:[validationMixins,regex,errorMessages],
    components:{
         'alert':Alert,
         'error-message':error,
        
    },computed:{
         loadingProgress:{
             get(){
                 return this.$store.state.loading.loadingProgress;
             }
         },
        
    },
    data:function(){
        return{
            
           messages:[],
           isnotValidForm:false,
           showPassword:false,
            userData:  {
                 password:{
                    value:'',
                    touched:false,
                    valid:false,
                },
                rePassword:{
                    value:'',
                    touched:false,
                    valid:false,
                }

            }
        };
        

    },methods:{
       isFormValide(){
           if(this.userData.password.valid&&this.userData.rePassword.valid){
               return true;
           }
           else{
               return false;
             }
       },
         onSubmit(){
             var data={
                password:this.userData.password.value
            }
            this.$store.dispatch('resetPassword',data);
              

         },
         resetform(){
           this.resetMessages();
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
        isPasswordMatched(){

           if(this.userData.password.value===this.userData.rePassword.value){
               this.markValid(this.userData.rePassword);
           }
           else{
               this.markInvalid(this.userData.rePassword);
           }
       },
          onCloseModel(){
          this.$store.dispatch('hideDialog');
          this.$store.dispatch('redirect');   
        }
        },

     
        created(){
              this.$store.dispatch('hideDialog');
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
button:disabled{
  cursor:not-allowed;

}
</style>
