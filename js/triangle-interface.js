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
      $('#solution').text("This is an isosceles triangle");
    }
    else if (state === 2) {
      $('#solution').text("This is an equilateral triangle");
    }
    else if (state === 1) {
      $('#solution').text("This is an scalene triangle");
    }
    else {
      $('#solution').text("This is NOT a triangle!!");
    }
    // $('#solution').append("<li>" + element + "</li>");
  });
});
