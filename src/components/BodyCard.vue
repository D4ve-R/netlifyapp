<template>
    <div class="bodycard">
        <slot/>
    </div>
</template>
<style scoped>

.bodycard {
    width: 38%;
    min-width: 220px;
    margin: auto;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.1rem 0 1rem 0;
    background: rgb(61, 61, 61);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    color : rgb(0, 255, 115);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

@media only screen and (max-width: 750px) {
    .bodycard {
        width:90%;
        margin: auto;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        padding: 0.1rem 0 1rem 0;
        background: rgb(85, 85, 85);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-left: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 1rem;
        color : rgb(0,255,115);
        box-shadow: rgb(0, 0, 0) 0px 5px 15px;
    }
}
</style>