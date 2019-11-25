<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" v-bind:to="'/'">
        <img alt="Shyft Logo" src="@/assets/logo.png" height="28" />
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        v-bind:class="[isRolled ? '' : 'is-active']"
        @click=" rollUpNav()"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu" v-bind:class="[isRolled ? '' : 'is-active']">
      <div class="navbar-start">
        <router-link class="navbar-item" v-bind:to="'/test'">Test 1</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Username</a>

          <div class="navbar-dropdown is-right">
            <a class="navbar-item">Profile</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              <button class="button is-warning">Logout</button>
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Cart</a>

          <div class="navbar-dropdown is-right">
            <div class="navbar-item">
              <p>Some random block of text will be placed in here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isRolled: true
    };
  },
  methods: {
    rollUpNav() {
      if (this.isRolled) return (this.isRolled = false);
      this.isRolled = true;
    }
  }
};
</script>