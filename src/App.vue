<template>
    <div class="container">
      <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Brand</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><router-link to="/">Home</router-link></li>
                    <li><router-link to="/admin">Admin</router-link></li>
                    <li><router-link to="/cart">Cart</router-link></li>

                </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
            </nav>

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
  }, 
   created: function () {
        console.log("init")
    },
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
