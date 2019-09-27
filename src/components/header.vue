<template>
  <header>
    <nav class="bg-primary navbar navbar-expand-md navbar-dark fixed-top">
      <router-link :to="'/'" class="navbar-brand">Header</router-link>
      <button v-on:click="toggleMenu()"
              class="btn btn-link navbar-toggler"
              type="button"
              aria-controls="site-navigation"
              aria-expanded="false"
              aria-label="Toggle navigation">
       |||
      </button>
      <div v-bind:class="{ show: showMenu }"
           class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="route in routes" :key="route.path">
            <router-link :to="route.path" class="nav-link">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { RouteConfig } from 'vue-router';
import { routes } from '@/router';

@Component
export default class HeaderComponent extends Vue {
  showMenu: boolean = false;
  routes: RouteConfig[] = routes;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange(): void {
    this.showMenu = false;
  }
}
</script>

<style lang="scss">
header {
  height: 5em; // push down content
  z-index: z("header");
}
</style>