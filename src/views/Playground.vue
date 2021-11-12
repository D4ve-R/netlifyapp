<template>
    <div class="playground">
        <GraphViz/>
    </div>
</template>

<script>
import GraphViz from '@/components/GraphViz.vue'
export default {
    name: 'Playground',
    components:{
        GraphViz
    }
}
</script>

<style>
@media (max-width: 768px) {
    .playground {
    width:100%;
    padding: 0.1rem 0 1rem 0;
    background: rgb(107, 107, 107);
    border-radius: 1rem;
    color : #3ec086;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    }
}
.playground {
    width:50%;
    margin: auto;
    padding: 0.1rem 0 1rem 0;
    background: rgb(100, 100, 100);
    border-radius: 0.5rem;
    color : rgb(0, 255, 115);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

</style>