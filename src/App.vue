<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/playground">Playground</router-link>
  </div>
  <router-view/>
</template>

<style>
html {
  background-image: url('~@/assets/background.svg');
  background-size: cover;
  background-attachment: fixed;
  font-size: 16px;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a1afbe;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #a1afbe;
  font-size: 1.2rem;
}

#nav a.router-link-exact-active {
  color: #2cb678;
}
</style>
