// defaults
var containerWidth = 400,
    containerHeight = 300,
    containerMargins = { top: 15, right: 15, bottom: 15, left: 15 };

var updateDimensions = function () { 
    width = containerWidth - containerMargins.left - containerMargins.right,
    height = containerHeight - containerMargins.top - containerMargins.bottom;
}
updateDimensions();

window.addEventListener('load', function() {
    
    // Set svg container width & height
    d3.select("#chart").style("width", containerWidth + "px").style("height", containerHeight + "px").style("fill","green");
    svg.attr("width", containerWidth).attr("height", containerHeight);
    
    // set input defaults
    document.getElementById("width").value = containerWidth;
    document.getElementById("height").value = containerHeight;
    
//    containerWidth = document.getElementById("chart").clientWidth; 
    containerHeight = document.getElementById("chart").clientHeight; 
    width = containerWidth - containerMargins.left - containerMargins.right;
    height = containerHeight - containerMargins.top - containerMargins.bottom; 
      
    
    

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
    
    // get values
    containerWidth = document.getElementById("width").value;
    containerHeight = document.getElementById("height").value;
    
    updateDimensions();
    
    // change chart div dimensions
    d3.select("#chart").transition().duration(500).style("width", containerWidth + "px").style("height", containerHeight + "px")
    
    // change svg dimensions
    svg.transition().duration(500).attr("width", containerWidth).attr("height", containerHeight);
    
    // change mapHolder dimensions // not sure about this
    mapHolder.transition().duration(500).attr("width", width).attr("height", height);
    
    // change placeholder dimensions
    mapElements.transition().duration(500).attr("width", width).attr("height", height);
    
    
    
    
    
    
    
//    // change margins
////    var newMargins = document.getElementById("select").value;
//    containerMargins = { top: newMargins, right: newMargins, bottom: newMargins, left: newMargins },
//    width = containerWidth - containerMargins.left - containerMargins.right,
//    height = containerHeight - containerMargins.top - containerMargins.bottom;
//    
//    // change g element
//    mapHolder.transition().duration(500).attr("transform", "translate(" + containerMargins.left + ", " + containerMargins.top + ")").attr("width", width).attr("height", height);
//    
//    // change rect
//    mapElements.transition().duration(500).attr("width", width).attr("height", height);
//    

    
}







    
    
