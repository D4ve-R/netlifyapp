<template>
    <div class="bodycard">
        <slot/>
    </div>
</template>
<style scoped>

.bodycard {
    width: 38%;
    min-width: 200px;
    margin: auto;
    margin-top: 2rem;
    padding: 0.1rem 0 1rem 0;
    background: rgb(85, 85, 85);
    border-radius: 1rem;
    color : rgb(0, 255, 115);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

@media only screen and (max-width: 750px) {
    .bodycard {
    width:90%;
    margin: auto;
    padding: 0.1rem 0 1rem 0;
    background: rgb(214, 34, 34);
    border-radius: 1rem;
    color : #3ec086;
    box-shadow: rgb(0, 0, 0) 0px 5px 15px;
    }
}
</style>