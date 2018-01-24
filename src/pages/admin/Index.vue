<template>
<div class="row">

    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <ul class="nav nav-pills">
            <li role="presentation" class="active"><router-link to="/admin/products">Products</router-link></li>
            <li role="presentation"><router-link to="/admin/new">Create</router-link></li>
            <li role="presentation"><router-link to=""></router-link></li>
        </ul>
    </div>
    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <router-view></router-view>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style>

</style>
