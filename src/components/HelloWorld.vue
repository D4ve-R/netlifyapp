<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <transition name="logo">
      <img v-if="show" alt="Vue logo" src="../assets/logo.png">
      <div v-else style="height:200px; width:200px; margin:auto;"></div>
    </transition>
    <h4>Built with &#x2764; and <b>VueJs</b> <i class="fab fa-vuejs" @click="show = ! show"></i></h4>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.fa-vuejs{
  cursor: pointer;
}

.logo-enter-active {
  animation: bounce 0.5s;
}

.logo-leave.active {
  animation: bounce 0.5s reverse;
}

@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform : scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>
