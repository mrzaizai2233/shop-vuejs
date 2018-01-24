<template>
    <div class="container">
      <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <ul class="nav nav-tabs">
          <li role="presentation" class="active"><router-link to="/">Home</router-link></li>
          <li role="presentation"><router-link to="/admin">Admin</router-link></li>
          <li role="presentation"><router-link to="/cart">Cart</router-link></li>
        </ul>
      </div>
      </div>
    <router-view></router-view>
    </div>
 
</template> 

<script>
export default {
  name: 'App',
  data () {
    return {
     isAuth: true,
      isAdmin: true
    }
  },
  methods:{
    toggle(){
      this.isLoggin = !this.isLoggin
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
