<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
//Import Components
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>