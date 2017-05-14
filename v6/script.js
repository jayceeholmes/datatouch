// ----- Color Palette -----
// BLUE: #1C3144
// DARK: #1F2232
// RED:  #D00000
// YELLOW: #FFBA08
// WHITE: #FFFFFF
// TORQUOISE: #0F8B8D


//  DEFINE DATA ------ ----------------------------------------------------------
var data = [];

for (var i = 0; i < 100; i++) {
    var dx = (Math.round(Math.random()*101 + 10));  // Get X
    var dy = dx + (Math.round(Math.random()*100 - 25)); // Get Y

    data.push({
      x: dx, // Assign x values
      y: dy  // Assign y values
    }); // End Push()

    console.log(data[i].x + "," + data[i].y);
}
data.sort(function compareNumbers(a,b ){
  return a.x - b.x; // Sort Numbers <
})
// -----------------------------------------------------------------------------


// DEFINE DIMENSIONS -----------------------------------------------------------
var margin = {top: 20, right: 40, bottom: 30, left: 40}, // Margins
    width = 1080 - margin.left - margin.right, // SVG Width
    height = 500 - margin.top - margin.bottom; // SVG Height
// -----------------------------------------------------------------------------


// COLOR -----------------------------------------------------------------------
// -----------------------------------------------------------------------------


// DEFINE SCALE ----------------------------------------------------------------
var x = d3.scale.linear() // X-Scale
    .range([0, width])
    .domain(d3.extent(data, function(d) { return d.x; })).nice()

var y = d3.scale.linear() // Y-Scale
    .range([height, 0])
    .domain(d3.extent(data, function(d) { return d.y; })).nice()
// -----------------------------------------------------------------------------


// DEFINE AXES -----------------------------------------------------------------
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
// -----------------------------------------------------------------------------


// SVG -------------------------------------------------------------------------
var context = d3.select('canvas') // Add Chart
    .style('background', '#1C3144') // Chart Background Color
    .attr('width', width + margin.left + margin.right) // Chart Width
    .attr('height', height + margin.top + margin.bottom) // Chart Height
    // .attr('transform', 'translate('+ margin.left +', '+ margin.top +')') //  Transform Chart
  .append('g')
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")") // Transform Content
// -----------------------------------------------------------------------------

// AXES TO SVG------------------------------------------------------------------
  context.append("g") // Append xAxis
      .attr("class", "x-axis") // Assign Class to  xAxis
      .attr("transform", "translate(0," + height + ")") // Transform xAxis
      .style({ fill: 'none', stroke: "#FFFFFF"}) // Style xAxis
      .call(xAxis) // Generate xAxis
    .append("text") // Add text to xAxis
      .attr("class", "label") // Assign Class to xAxis Text
      .attr("x", width) // Set X Position
      .attr("y", -6) // Set Y Posiition
      .style("text-anchor", "end") // Style Text
      .text("Variable 1"); // Text

  context.append("g")  // Append yAxis
      .attr("class", "y-axis") // Assign Class to yAxis
      .style({ fill: 'none', stroke: "#FFFFFF"}) // Style yAxis
      .call(yAxis) // Generate yAxis
    .append("text") // Add text to yAxis
      .attr("class", "label") // Assign Class to yAxis Text
      .attr("transform", "rotate(-90)") // Transform yAxis Text
      .attr("y", 6) // Set Y Posiition
      .attr("dy", ".71em") // Set Y Offset Posiition
      .style("text-anchor", "end") // Style Text
      .text("Variable 2") // Text
// -----------------------------------------------------------------------------


// DATA TO SVG -----------------------------------------------------------------
var dot = context.selectAll("dot") // Select Dots
   .data(data) // Use Data
  .enter().append("circle") // Append Circle
    .attr("class", "dot")  // Assign  Class to Circle
    .attr("r", 0) // Assign Radius
    .attr("cx", function(d) { return x(d.x); }) // X Position
    .attr("cy", function(d) { return y(d.y); }) // Y Position
    .style("fill", "#FFBA08") // Style Circle
// -----------------------------------------------------------------------------


// TRANSITIONS -----------------------------------------------------------------

data.forEach(function(d, i) {
    dot.transition().delay(function(d,i){ return i*15 }).duration(1000).ease( "bounce")
            .attr("r", 8)
});
// -----------------------------------------------------------------------------
