<template>
  <div id="app">
    <header-component />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/header.vue';

@Component({
  components: {
    HeaderComponent,
  },
})
export default class App extends Vue { }
</script>
