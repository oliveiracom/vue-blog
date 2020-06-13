<template>
    <div class="main">
        <h3>Artigos que você pode gostar</h3>
        <div id="related"  v-for="item of related" :key="related.id">
            <div> POSTINHO</div>
            <div> POSTINHO</div>
            <div> POSTINHO</div>
            <div> POSTINHO</div>
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
        return{
            related: [],
            show: [],
        }
    },

    mounted() {
        this.getRelated();
    },
    
    methods: {
        getRelated() {
             Posts.listAll().then( res => {
             this.related = res.data;
            });
        },

        excludeCurrent(){
            // const limit = this.related.reverse().splice(0,5);
            // const endof = [];            

            // const show = limit.filter( function(el) {
            //      if (el.id != 2 ) {
            //         endof.push(el.title);
            //      }                                
            //  });
            
            //this.show = show;

            this.loading = false;
        }
    },

}
</script>