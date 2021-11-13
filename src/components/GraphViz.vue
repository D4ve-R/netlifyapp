<template>
    <h3>Shortest path algortihm</h3>
    <div class="btns">
    <button @click="initGrid()"> Reset</button>
    <button @click="getPath()">Shortest Path </button>
    <button @click="getInfo()">Control </button>
    </div>
    <div class="grid">
        <div class="col" v-for="(rows, id) in grid" :key="id">
            <Box v-for="(node) in rows" 
                :key="node.id" 
                :color="node.color"
                :width="20"
                :height="20" 
                @click="mark(node)"
                @mouseover.ctrl="toggle(node)"
                @mouseover.alt="untoggle(node)"
            />
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import Box from './Box.vue';
import {dijkstra} from '@/use/useDijkstra';

export default {
    name: "GraphViz",
    components: {
        Box
    },
    data () {
        return{
            grid: Array,
            gridSize: 10,
            startNode: Object,
            targetNode: Object,
            switch: true,
        }
    },
    computed:{
        shortPath: function(){
            return dijkstra(this.grid, this.startNode, this.targetNode, this.gridSize);
        }
    },
    watch: {
        startNode(newN, oldN){
            oldN.color = 'white';
            this.grid.forEach(col => {
                col.forEach(element => {
                    if(element.color === 'green')
                        element.color = 'white';
                });
            });
            this.targetNode.color = 'white';
            this.targetNode = {}
        },
    },
    methods: {
        initGrid() {
            var t0 = performance.now();
            var size = this.gridSize;
            var arr = new Array();
            for(let i = 0; i < size; i++)
                arr[i] = new Array();

            var id = 0;
            for(let i = 0; i < size; i++)
                for(let j = 0; j < size; j++)
                    arr[i][j] = {'color': 'white', 'id': id++};

            this.grid = arr;
            var t1 = performance.now();
            console.log(`changing color for ${this.gridSize * this.gridSize} elements took : ${t1 - t0}  milliseconds.`)
        },
        getPath(){
            if(this.startNode && this.targetNode)
            this.shortPath;
            // this.startNode = {};
            // this.targetNode = {};
        },
        mark(node){
            if(this.switch){
                this.startNode = node;
                this.switch = false;
                node.color = 'blue';
            }
            else{
                this.targetNode = node;
                node.color = 'orange';
                this.switch = true;
            }
            // const {distTo, pathArr} = dijkstra(this.grid, node, getNodefromId(this.grid, 99, this.gridSize), this.gridSize);
            // console.log(pathArr);
            // console.log(distTo);
        },
        toggle(node){
            node.color = 'red';
        },
        untoggle(node){
            node.color = 'white';
        },
        getInfo(){
            Swal.fire({
                title: 'Controls',
                html: "<ul><li><i class=\"fas fa-mouse-pointer\"></i>Click a box to set starting point</li><li><i class=\"fas fa-mouse-pointer\"></i>Click another box to set ending point</li><li>Hold ctrl and hover over box to activate wall</li><li>Hold opt and hover over box to deactivate wall</li></ul>",
                icon: 'info',
                confirmButtonText: 'Cool'
            }).then(() => Swal.fire({
                showConfirmButton: false,
                icon: 'success',
                timer: 1700,
                timerProgressBar: true,
                })
            );
        },
    },
    mounted(){
        this.initGrid();
    }
}
</script>

<style scoped>
.btns {
    max-width: 300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

button{
    box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.75);
}

button:hover{
    background-color: rgba(0, 255, 0, 0.8);
    transition: background-color 1s ease-out;
    transition: box-shadow 1s ease-out;
    box-shadow: 0 0 5px 2px rgb(0, 255, 0, 0.8);
    border: transparent;
}

.grid{
    display: flex;
    width: 200px;
    margin: auto;
    margin-top: 1rem;
}

.col{
    display: flex;
    flex-direction: column;
}
</style>
