<template>
    <div class="playground">
        <GraphViz/>
    </div>
    <div class="playground">
        <MetaMaskClient />
    </div>
</template>

<script>
import GraphViz from '@/components/GraphViz/GraphViz.vue'
import MetaMaskClient from '@/components/MetaMaskClient.vue'

export default {
    name: 'Playground',
    components:{
        GraphViz,
        MetaMaskClient
    },
}
</script>

<style>
@media only screen and (max-width: 750px) {
    .playground {
    width:100%;
    padding: 0.1rem 0 1rem 0;
    background: rgb(214, 34, 34);
    border-radius: 1rem;
    color : #3ec086;
    box-shadow: rgb(0, 0, 0) 0px 5px 15px;
    }
}
.playground {
    width:33%;
    min-width: 200px;
    margin: auto;
    margin-top: 2rem;
    padding: 0.1rem 0 1rem 0;
    background: rgb(85, 85, 85);
    border-radius: 1rem;
    color : rgb(0, 255, 115);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

</style>