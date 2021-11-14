<template>
  <svg :width="width" :height="height">
    <g>
      <rect :width="width" :height="height" rx="5" ry="5" :style="{'fill': color, 'stroke-width':3, 'stroke': '#111'}"/>
    </g>
  </svg>
</template>

<script>
export default {
  name : "Box",
  props: {
    width: Number,
    height: Number,
    color: String,
  },
}
</script>

<style scoped>

</style>