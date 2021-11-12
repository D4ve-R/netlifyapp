import * as d3 from 'd3';

const drawGraph = (data) => {
  const width = 800;
  const height = 500;
  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));

  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links))
    .force("charge", d3.forceManyBody().strength(-150))
    .force("center", d3.forceCenter(width / 2, height / 2))
    
  const svg = d3.select("#svgRef");
  
  const drag = simulation => {
    function dragstarted(event) {
      if (!event.active)
        simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
      
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
      
    function dragended(event) {
      if (!event.active)
        simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
      
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.8)
    .selectAll("line")
    .data(links)
    .join("line")
      .attr("stroke-width", d => Math.sqrt(d.weight) * 1.5);

  const node = svg.append("g")
    .selectAll("g")
    .data(nodes)
    .join("g")
      .call(drag(simulation));

  node.append("circle")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .attr("r", 8)
      .attr("fill", d => {
        const scale = d3.scaleOrdinal(d3.schemeCategory10);
        return scale(d.group);
      });

  node.append("text")
      .attr("x", 9)
      .attr("font-weight", 700)
      .style("fill", "#fbff00")
      .style("font-size", "14px")
      .text(d => d.id);

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
    node
      .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
      });
  });
}


export {drawGraph};