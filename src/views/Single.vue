<template>
    <div id="single" class="main">
        <Header />
        <span class="loading" v-if="loading"></span>
        <div class="content">
            <h1>{{ single.title}}</h1>
            <div>{{ single.body }}</div>
        </div>
        
        <Footer />
    </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Posts from '@/services/Posts.js';
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
//import Related from '../components/Related.vue';

export default {
    name: "Single",
    components: {
      Header,
      Footer,
      //Related
    },

    data() {
        return {
            single: {},
            pageId : Number(this.$route.params.id),
            loading:true
        }
    },

    methods : {
        getPost(id){
           Posts.single(id).then( res => {
            this.single = res.data;
            this.loading = false;
            });
        }
    },

    mounted() {
        this.getPost(this.pageId);
    }
}
</script>