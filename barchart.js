var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];
var data = [
    {cuisine:"American", numRecipes:8},
    {cuisine:"Asian Fusion", numRecipes:1},
    {cuisine:"Bagels", numRecipes:8},
    {cuisine:"Bakeries", numRecipes:8},
    {cuisine:"Barbeque", numRecipes:7},
    {cuisine:"Bars", numRecipes:8},
    {cuisine:"Beer", numRecipes:0},
    {cuisine:"Beer Bar", numRecipes:8},
    {cuisine:"Brazilian", numRecipes:8},
    {cuisine:"Breakfast & Brunch", numRecipes:8},
    {cuisine:"Burgers", numRecipes:7},
    {cuisine:"Cafes", numRecipes:8},
    {cuisine:"Cajun", numRecipes:7},
    {cuisine:"Caribbean", numRecipes:8},
    {cuisine:"Cheese", numRecipes:8},
    {cuisine:"Chicken Wings", numRecipes:8},
    {cuisine:"Chinese", numRecipes:8},
    {cuisine:"Cocktail Bars", numRecipes:8},
    {cuisine:"Coffee & Tea", numRecipes:6},
    {cuisine:"Cuban", numRecipes:8},
    {cuisine:"Delis", numRecipes:8},
    {cuisine:"Desserts", numRecipes:8},
    {cuisine:"Dim Sum", numRecipes:8},
    {cuisine:"Diners", numRecipes:8},
    {cuisine:"Donuts", numRecipes:8},
    {cuisine:"Ethiopian", numRecipes:8},
    {cuisine:"European", numRecipes:8},
    {cuisine:"Food Stands", numRecipes:8},
    {cuisine:"Food Trucks", numRecipes:8},
    {cuisine:"French", numRecipes:8},
    {cuisine:"German", numRecipes:8},
    {cuisine:"Gluten-Free", numRecipes:8},
    {cuisine:"Greek", numRecipes:7},
    {cuisine:"Hot Dogs", numRecipes:7},
    {cuisine:"Indian", numRecipes:8},
    {cuisine:"Italian", numRecipes:6},
    {cuisine:"Japanese", numRecipes:7},
    {cuisine:"Juice Bars & Smoothies", numRecipes:2},
    {cuisine:"Korean", numRecipes:8},
    {cuisine:"Latin American", numRecipes:8},
    {cuisine:"Lounges", numRecipes:2},
    {cuisine:"Mediterranean", numRecipes:1},
    {cuisine:"Mexican", numRecipes:8},
    {cuisine:"Middle Eastern", numRecipes:8},
    {cuisine:"Pizza", numRecipes:8},
    {cuisine:"Poke", numRecipes:7},
    {cuisine:"Pubs", numRecipes:7},
    {cuisine:"Ramen", numRecipes:8},
    {cuisine:"Sandwiches", numRecipes:8},
    {cuisine:"Seafood", numRecipes:8},
    {cuisine:"Southern", numRecipes:7},
    {cuisine:"Spanish", numRecipes:8},
    {cuisine:"Special", numRecipes:0},
    {cuisine:"Steakhouses", numRecipes:8},
    {cuisine:"Sushi", numRecipes:5},
    {cuisine:"Tex-Mex", numRecipes:6},
    {cuisine:"Thai", numRecipes:8},
    {cuisine:"Vegetarian", numRecipes:1},
    {cuisine:"Vietnamese", numRecipes:8},
    {cuisine:"Vegan", numRecipes:6},
    {cuisine:"Wine Bars", numRecipes:7},
    ]
    

console.log(data.length)
// Create variable for the SVG
var svg = d3.select("body").append("svg")
          .attr("height","100%")
          .attr("width","100%");
var numCusine = data.length

// Select, append to SVG, and add attributes to rectangles for bar chart
svg.selectAll("rect")
    .data(data)
    .enter().append("rect")
          .attr("class", "bar")
          .attr("height", function(d, i) {return (d.numRecipes * 10)})
          .attr("width","12")
          .attr("x", function(d, i) {return (i * 15)+10})
          .attr("y", function(d, i) {return 415 - (d.numRecipes * 10)});

// Select, append to SVG, and add attributes to text
svg.selectAll("text")
    .data(data)
    .enter().append("text")
    .text(function(d) {return d.numRecipes})
           .attr("class", "text")
           .attr("x", function(d, i) {return (i * 15)+11})
           .attr("y", function(d, i) {return 415 - (d.numRecipes*5)});

var xAxis = d3.svg.axis()
    .scale(numRecipes);

svg.selectAll(".text")        
    .data(data)
    .enter()
    .append("text")
           .attr("class","label")
           .call(xAxis)
           .attr("x", (function(d) { return x(d.cuisine); }  ))
           //.attr("y", function(d) { return y(d.cuisine) - 20; })
           .attr("dy", ".35em")
           .attr("transform", "rotate(90)")
           .text(function(d) { return d.cuisine; })
           .style("text-anchor", "start");      
var x = d3.scaleBand().rangeRound([0,915])
x.domain(data.map(function(d){return d.cuisine;}))

