<template>
    <canvas id="three" ref="three"></canvas>
</template>

<script>
import * as Three from 'three';

export default {
  name: 'MyThree',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
        const container = this.$refs.three;

        this.scene = new Three.Scene();
        this.camera = new Three.PerspectiveCamera(75, 300/150, 0.1, 1000);
        this.camera.position.z = 20;

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(300, 150);
        container.appendChild(this.renderer.domElement);

        const geometry = new Three.BoxGeometry(1, 1, 1);
        const material = new Three.MeshPhongMaterial({color: 0x00ff00});

        this.mesh = new Three.Mesh(geometry, material);
        this.scene.add(this.mesh);

        const ambientLight = new Three.AmbientLight( 0x666666, 1.0 );  
        this.scene.add(ambientLight);

        const directionalLight = new Three.DirectionalLight( 0xffffff, 0.6 );
        directionalLight.position.set( 0, 100, 10 );
        this.scene.add(directionalLight);

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      //this.animate();
  }
}
</script>

<style scoped>
.three {
    width: 300px;
    height: 150px;
}
</style>