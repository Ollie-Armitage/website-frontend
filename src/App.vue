<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  methods: {...mapActions(['fetchProjects', 'fetchBlogPosts'])},
  computed: { ...mapGetters(['allProjects'])},
  async mounted(){
    if(this.allProjects.length === 0){
      await this.fetchProjects();
    }
  }

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Merriweather&display=swap');

</style>
