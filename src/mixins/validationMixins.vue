<script>
export default {
methods:{
         isValid (obj,reg){
          console.log('inside isValid');
          var valid=RegExp(reg,'g').test(obj.value);
          console.log(valid);
          
          if(valid){
             return true;
          }
          else{
              return false;
          }


        },
        markInvalid: function(obj){
            obj.touched = true;
            obj.valid=false;
            console.log('inside markInvalid',this.userData);

        },
        markValid: function(obj){
            obj.touched = true;
            obj.valid=true;
            console.log('inside markValid',this.userData);

        },
        validateProperty(obj,reg){
            console.log("******* VALIDATING *********")
            console.log("typeof regex => " + typeof reg);
            console.log(reg)
            console.log('regex',reg);
            if(this.isValid(obj,reg)){
                this.markValid(obj)
            }
            else{
                this.markInvalid(obj);
            }
            console.log('inside validateProperty',this.userData);
            
        }
    }

}

</script>
