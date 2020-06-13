<template>
    <header>
        <router-link  :to="{ path: '/'}">
         <img alt="Vue Blog" class="navbar-brand" src="@/assets/logo.png" /> Vue Blog
        </router-link>   
    </header>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

export default {
    name: "Header"
}
</script>