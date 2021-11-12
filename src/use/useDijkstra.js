class Queue {
    constructor(){
        this.elements = [];
    }
    push(el) {
        this.elements.push(el);
    }
    popFront(){
        if(!this.isEmpty()){
            var element = this.elements[0];
            this.elements.shift();
            return element;
        }
        else return undefined;
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    contains(el){
        return this.elements.includes(el);
    }
}

const getNodefromId = (grid, id) =>{
    return grid[Math.floor(id / grid.length)][id % grid.length];
}

const getPath = (grid, startNode, targetNode, pathArr) =>{
    let it = targetNode.id;
    while(it !== startNode.id){
        it = pathArr[it];
        if(it === startNode.id)
            break;
        getNodefromId(grid, it).color = 'green';
    }
}

const adjCallback = (grid, node, callback) => {
    let size = grid.length;
    let x = Math.floor(node.id / size);
    let y = node.id % size;
    if(y + 1 < size){
        callback(grid[x][y + 1]);
    }
    if(y - 1 >= 0){
        callback(grid[x][y - 1]);
    }
    if(x + 1 < size){
        callback(grid[x + 1][y]);
    }
    if(x - 1 >= 0){
        callback(grid[x - 1][y]);
    }
}

const getAdj = (grid, node) => {
    let size = grid.length;
    var adjNodes = [];
    let x = Math.floor(node.id / size);
    let y = node.id % size;
    if(y + 1 < size){
        var below = grid[x][y + 1];
        if(below.color !== 'red')
        adjNodes.push(below);
    }
    if(y - 1 >= 0){
        var top = grid[x][y - 1];
        if(top.color !== 'red')
        adjNodes.push(top);
    }
    if(x + 1 < size){
        var right = grid[x + 1][y];
        if(right.color !== 'red')
        adjNodes.push(right);
    }
    if(x - 1 >= 0){
        var left = grid[x - 1 >= 0 ? x - 1 : x][y];
        if(left.color !== 'red')
        adjNodes.push(left);
    }
    return adjNodes;
}

const dijk = (graph, startNode, distToVect, pathArr, queue) => {
    const adjs = getAdj(graph, startNode);
    adjs.forEach(adjNode => {
       let dist =  distToVect[startNode.id] + 1;
        if(distToVect[adjNode.id] > dist){
            distToVect[adjNode.id] = dist;
            pathArr[adjNode.id] = startNode.id;

            if(!queue.contains(adjNode))
                queue.push(adjNode)
        } 
    });
}

const dijkstra = (graph, startNode, targetNode, graphSize) => {
    const distTo = [];
    const pathArr = [];
    const queue = new Queue();
    let size = graphSize * graphSize;
    for (let i = 0; i < size; i++) {
        distTo[i] = size + 1;
    }
    distTo[startNode.id] = 0;

    queue.push(startNode);
    while(!queue.isEmpty()){
        var node = queue.popFront();
        dijk(graph, node, distTo, pathArr, queue);
    }

    getPath(graph, startNode, targetNode, pathArr);

    return {distTo, pathArr};
}

export {dijkstra, adjCallback, getNodefromId};