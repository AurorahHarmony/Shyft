<template class="has-navbar-fixed-top">
  <div id="app">
    <app-nav></app-nav>
    <div class="container is-widescreen">
      <router-view class="app-body"></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
//Import Components
import Header from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    "app-nav": Header,
    "app-footer": Footer
  }
};
</script>

<style scoped>
.app-body {
  margin-top: 4rem;
}
</style>