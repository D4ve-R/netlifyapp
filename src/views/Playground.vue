<template>
    <div class="playground">
        <GraphViz/>
    </div>
    <div class="playground">
        <myThree />
    </div>
</template>

<script>
import GraphViz from '@/components/GraphViz.vue'
import MyThree from '@/components/MyThree.vue'
export default {
    name: 'Playground',
    components:{
        GraphViz,
        MyThree
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
    box-shadow: rgb(0, 0, 0) 0px 5px 15px;
    }
}
.playground {
    width:50%;
    margin: auto;
    margin-top: 2rem;
    padding: 0.1rem 0 1rem 0;
    background: rgb(85, 85, 85);
    border-radius: 1rem;
    color : rgb(0, 255, 115);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

</style>