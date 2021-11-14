<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/playground">Playground</router-link>
  </div>
  <router-view/>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  created(){
    this.$ga.disable()
  },
  beforeMount(){
    Swal.fire({
      title: 'Cookies',
      html: "We use Google Analytics to improve user experience <br> Please accept",
      iconHtml: "<i class=\"fas fa-cookie-bite\"></i>",
      showDenyButton: true,
      confirmButtonColor: 'green',
      confirmButtonText: 'Cool',
      denyButtonColor: 'red',
      denyButtonText: 'Nope',
    }).then((result) => {
      if(result.isDenied) {
        console.log("Diasabling Google Analytics");
        this.$ga.disable();
      }
      else {
        console.log("Enabling Google Analytics");
        this.$ga.enable();
      }
    });
  }
}
</script>

<style>
html, body {
  font-size: 16px;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  background-image: url('~@/assets/background.svg');
  background-size: cover;
  background-attachment: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a1afbe;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #a1afbe;
  font-size: 1.2rem;
  text-decoration: none;
}

#nav a:hover {
  color: white;
}

#nav a.router-link-exact-active {
  color: #2cb678;
}
</style>
