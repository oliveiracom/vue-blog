<template>
    <div class="main">
        <h3>Artigos que você pode gostar</h3>
        <div id="related">
            <div class="card" v-for="item of show" :key="item.id">
                    <router-link :to="{ path: '/post/'+ item.id}">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.body }}</p>
                    </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Posts from '../services/Posts.js';

export default {
    name: "Related",
    props: {
        hide: Number
    },

    data() {
        return {
            related: [],
            show: [],
        }
    },

    async mounted() {
        const run = await this.getRelated();
        ;
    },
    
    methods: {
        getRelated() {
             Posts.listAll().then( res => {
                const recent = res.data.reverse().splice(0,5);
                this.related = recent;
                return this.excludeCurrent(this.hide);
            });
        },

        async excludeCurrent(id){
            const endof = [];
            const show = await this.related.filter( function(el) {
                  if (el.id != id ) {
                      const excerpt = el.body.substring(0,50);
                     endof.push({
                         id: el.id,
                         title: el.title,
                         body: excerpt
                     });
                  }
            });
            const link = endof.splice(0,4);
            this.show = link;
            this.loading = false;
        }
    },

}
</script>