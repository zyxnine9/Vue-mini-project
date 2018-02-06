<template>
 <p>Home {{funds | currency}}</p>
</template>

<script>
  export default {
    computed:{
      funds(){
        return this.$store.getters.funds;
      }
    }
  }
</script>
