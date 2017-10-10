var Triangle = require('./../js/triangle.js').triangleModule;

$(document).ready(function() {
  $('#triangle-form').submit(function(event) {
    event.preventDefault();
    var side1 = $('#side1').val();
    var side2 = $('#side2').val();
    var side3 = $('#side3').val();
    var simpleTriangle = new Triangle(side1,side2,side3);
    var state = simpleTriangle.isTriangle();
    if(state === 3) {
      $('#solution').text("<h3>This is an isosceles triangle</h3>");
    }
    else if (state === 2) {
      $('#solution').text("<h3>This is an equilateral triangle</h3>");
    }
    else if (state === 1) {
      $('#solution').text("<h3>This is an scalene triangle</h3>");
    }
    else {
      $('#solution').text("<h3>This is NOT a triangle!!</h3>");
    }
    // $('#solution').append("<li>" + element + "</li>");
  });
});
