<template>
    <div class="playground">
    <BodyCard>
        <MetaMaskClient />
    </BodyCard>
    <BodyCard>
        <GraphViz/>
    </BodyCard>
    </div>
</template>

<script>
import GraphViz from '@/components/GraphViz/GraphViz.vue'
import MetaMaskClient from '@/components/Crypto/MetaMaskClient.vue'
import BodyCard from '@/components/BodyCard.vue'

export default {
    name: 'Playground',
    components:{
        GraphViz,
        MetaMaskClient,
        BodyCard
    },
}
</script>

<style>
.playground {
    overflow-y: auto;
}

</style>