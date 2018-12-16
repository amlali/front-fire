<template>
    <div>
        <div :class="col" 
             role="alert" >
            {{resMessages}}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="onClose()">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    </div>
</template>

<script>

    export default {

       computed:{
           resMessages:{
               get(){
                return this.$store.state.Alert.resMessages
               }
           },
           col:{
               get(){
                console.log(this.$store.state.Alert.color);
                   
                return this.$store.state.Alert.color;
               }
           }
       },
       methods:{
           onClose(){
               this.$store.dispatch('clearMessages');
           }
       }
    }
</script>
