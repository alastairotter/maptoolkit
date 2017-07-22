// defaults
var containerWidth = 700,
    containerHeight = 500,
    containerMargins = { top: 100, right: 100, bottom: 100, left: 100 },
    width = containerWidth - containerMargins.left - containerMargins.right,
    height = containerHeight - containerMargins.top - containerMargins.bottom;

window.addEventListener('load', function() {
    
    // dimensions of chart container : clientWidth excludes borders, use offsetWidth to include border in calculation
    
    containerWidth = document.getElementById("chart").clientWidth; 
    containerHeight = document.getElementById("chart").clientHeight; 
    width = containerWidth - containerMargins.left - containerMargins.right;
    height = containerHeight - containerMargins.top - containerMargins.bottom; 
      
    
    // set dimension inputs
    document.getElementById("select").value = containerMargins.top;

})



var svg = d3.select("#chart")
    .append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight)
        
var mapHolder = svg.append("g")
    .attr("transform", "translate(" + containerMargins.left + ", " + containerMargins.top + ")")
    .attr("class", "map-holder")
  

var mapElements = mapHolder.append("rect")
    .attr("class", "rect")
    .attr("width", width)
    .attr("height", height)


// resize elements
function resize () { 
    
    // change margins all set equal
    var newMargins = document.getElementById("select").value;
    containerMargins = { top: newMargins, right: newMargins, bottom: newMargins, left: newMargins },
    width = containerWidth - containerMargins.left - containerMargins.right,
    height = containerHeight - containerMargins.top - containerMargins.bottom;
    
    // change g element
    mapHolder.transition().duration(500).attr("transform", "translate(" + containerMargins.left + ", " + containerMargins.top + ")").attr("width", width).attr("height", height);
    
    // change rect
    mapElements.transition().duration(500).attr("width", width).attr("height", height);
    

    
}







    
    
