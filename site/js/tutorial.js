(function myFunction() {


var theData = [ 1, 2, 3, 72 ];

var circle = [40, 20, 10];

var svgContainer = d3.select("body").append("svg")
	.attr("width", 200)
	.attr("height", 200);

var circles = svgContainer.selectAll("circle")
  .data(circle)
  .enter()
  .append("circle");
  
var circleAttributes = circles
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", function(d) { return d; })
  .style("fill", function(d) {
    var returnColor;
	if (d === 40) { returnColor = "green";
	} else if (d === 20) { returnColor = "purple";
	} else if (d === 10) { returnColor = "red"; }
	return returnColor;
  });

var p = d3.select("body").selectAll("p")
  .data(theData)
  
  /*The D3.js Enter Method returns the virtual enter selection from the Data Operator. 
  This method only works on the Data Operator because the Data Operator is the only one that 
  returns three virtual selections.
  */
  .enter() //However, it is important to note that this reference (empty selection) only allows chaining of append, insert and select operators to be used on it.
  .append("p") //For each placeholder element created in the previous step, a p element is inserted.
  .text( function (d, i) {
		var tempvalue = d + 2;
		return "i = " + i + ", d = "+ d;
	}); 
	
	//The Text Operator sets the textContent of the node to the specified value on all selected elements.
  
  //What is also true of the Text Operator is that if the value passed to it (the Text Operator) is a function, then the function is evaluated for each element in order. 
  //And the functions result is used to set each element's text context.

  //Which in our case means, that instead of setting "Hello" as the text value, the function goes through each element, gets the __data__ property and returns it to the Text Operator, 
  //so that it can set that result as the text content for the element.
  
  //You can see that the variable d is available for use in the anonymous function. 
  //This variable is provided to us by D3.js and it refers to the current __data__ attribute for the specific element being processed.

  //The are two other variables provided to us by D3.js - this and i.

  //this refers to the current DOM element being evaluated.
  
  //i refers to the index of the current HTML element being evaluated in the selected elements selection. 
  //Remember that all the data is processed at once and in sequential order. Note - i starts at 0. This means in our data set
  
  console.log(p);
  
})();