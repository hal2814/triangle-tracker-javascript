function Triangle(side1,side2,side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

// has 2 equal sides
Triangle.prototype.isosceles = function () {
  if((this.side1 === this.side2) || (this.side3 === this.side2) || (this.side1 === this.side3)) {
    return true;
  }
};

//all sides are the same
Triangle.prototype.equilateral = function () {
  if((this.side1 === this.side2) && (this.side1=== this.side3)) {
    return true;
  }
};

//3 unequal sides
Triangle.prototype.scalene = function () {
  if((this.side1 != this.side2) && (this.side1 != this.side3) && (this.side2 != this.side3)) {
    return true;
  }
};

//checks if it is a triangle
Triangle.prototype.isTriangle = function () {
  if ((this.side1 + this.side2 > this.side3) && (this.side2 + this.side3 > this.side1) && (this.side3 + this.side1 > this.side2)) {
    if (this.isosceles()) {
      return 3;
    }
    else if (this.equilateral()) {
      return 2;
    }
    else if (this.scalene()) {
      return 1;
    }
  }else {
    return 0;
  }
};
