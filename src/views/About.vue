<template>
  <div class="about">
    <h1>This is an about page</h1>
    <BodyCard>
      <h2>About Me</h2>
      <p>I'm a CS Student, who really likes code.<br>
      Check out my <a class="textLinks" href="#github">Github</a> &amp; <a class="textLinks" href="#linkedin">Linkedin</a>.<br></p>
    </BodyCard>
    <BodyCard>
      <SkillChart />
    </BodyCard>

    <div class="links">
      <a id="github" href="https://github.com/D4ve-R" target="_blank" class="contactLinks"><i class="fab fa-github fa-3x"></i></a>
      <a id="linkedin" href="https://linkedin.com/in/d4ve-r" target="_blank" class="contactLinks"><i class="fab fa-linkedin fa-3x"></i></a>
    </div>
  </div>
</template>

<script>
import SkillChart from '@/components/Charts/SkillChart.vue'
import BodyCard from '@/components/BodyCard.vue'

export default {
  name:'About',
  components:{
    SkillChart,
    BodyCard
  }
}
</script>

<style scoped>

.links {
  display: flex;
  justify-content: center;
}

.contactLinks {
  margin: 1rem;
  color: white;
}

.textLinks {
  color: rgb(0, 200, 0);
  text-decoration:none;
  decoration: none;
  cursor: s-resize;
}

</style>