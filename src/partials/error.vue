<template>
    <div class="form-error">
      <p class="text-danger" >{{errorMessage}}</p>
    </div>
</template>
<script>
export default {
    props:{
        errorMessage:String
    }
}
</script>
