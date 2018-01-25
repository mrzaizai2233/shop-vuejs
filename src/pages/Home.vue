<template>
    <div>
        <div class="title">
            <h1>{{msg}}</h1>
            <button @click="test()">Click</button>
        </div>
    </div>
</template>
<script>
  import {
    ADD_TO_CART,
    REMOVE_FROM_CART
  } from '../store/mutation-types'

export default {
  name:'home',
 data(){
    return {
        msg:'Wellcome to your Vue.js app'
    }  
  },
  methods:{
      test(){
          this.$store.dispatch('allProducts')
      }
  }
}
</script>
<style>

</style>
