//Bar Chart Part 3 Tutorial

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("js/data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
      .attr("width", x.rangeBand());
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

//======================================================================
//CIRCLE TUTORIAL

$(document).ready(function() {
//var svg = d3.select(document.getElementById('sample'))
  svg.append("circle")
	  .attr("cx", 100)
	  .attr("cy", 100)
	  .attr("r", 50)
	  .attr("fill", "steelBlue");

});

//Selection tutorial

var selection = d3.select("body");



//Me messing around

var svg = d3.select(document.getElementById('sample2'))

svg.append("path")
	.attr("d", "M200,300 L400,50")
	.attr("stroke", "black")
	.attr("fill", "none")
	.attr("stroke-width", 3);
