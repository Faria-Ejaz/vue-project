<template>
  <div class="app-root">
    <nav class="navbar">
      <router-link to="/">
        <i class="fa-solid fa-house" />
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.app-root {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  color: #2c3e50;
  background: #f9f9f9;
  padding: 0 1em 1em;
}

.navbar {
  display: flex;
  flex-direction: column;
  background-color: #0c2a36;
  padding: 25px;
  color: #fafafa;

  font-size: 24px;
}

a {
  margin-bottom: 25px;
}

.router-link-active {
  @apply text-teal-500;
}
</style>
