var Triangle = require('./../js/triangle.js').triangleModule;

describe('Triangle', function() {

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
    triangle = new Triangle(3,4,5);
    notTriangle = new Triangle(3,9,22);
  });

  it('should show how beforeEach() works', function() {
  console.log(reusableTriangle);
  console.log(triangle);
  console.log(notTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    expect(triangle.side1).toEqual(3)
    expect(triangle.side2).toEqual(4)
    expect(triangle.side3).not.toEqual(6)
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    expect(notTriangle.isTriangle()).toEqual(0);
  });

});
