<template>
  <div id="home"  class="main">
    <Header />
    <span class="loading" v-if="loading"></span>
    <div> <h1>Últimos Posts</h1></div>
    <div id="posts" v-for="post of posts" :key="post.id">
      <div class="row">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <router-link :to="{ path: '/post/'+ post.id}"><button>Ler completo</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '@/services/Posts.js';
import Header from '../components/layout/Header.vue';

export default {
    name: "Home",
    components: {
      Header,
    },

    data() {
        return {
          posts: [],
          loading: true
        }
    },

    mounted() {
      this.getPosts();
    },

    methods : {
      getPosts() {
        Posts.listAll().then( res => {
          this.posts = res.data;
          this.loading = false;
          });
      },

      excerpt(txt) {
        //const reduce = txt.substring(0, 120);

        // const reduce = this.posts.map( res => {

        // });
        // return reduce;
      },
        
    }
}
</script>
