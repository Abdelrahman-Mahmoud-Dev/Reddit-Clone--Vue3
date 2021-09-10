<template>
    <nav class="navbar navbar-light bg-light"> 
    <router-link class="navbar-brand" href="#" to="/posts">/a/posts</router-link>
    </nav>
    <router-view></router-view>
</template>

<script>

export default {

    data() {
        return {
            test: 'Hello Vue!'
        }
    },
  
}
</script>

<style>

</style>
