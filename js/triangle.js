function Triangle(side1,side2,side3) {
  this.side1 = parseInt(side1);
  this.side2 = parseInt(side2);
  this.side3 = parseInt(side3);
}

Triangle.prototype.sideSame = function () {
  if(this.side1 === this.side2){
    if(this.side1 + this.side2 > this.side3){

      return true;
    }
  }
  if(this.side1 === this.side3){
    if(this.side1 + this.side3 > this.side2){

      return true;
    }
  }
  if(this.side2 === this.side3){
    if(this.side2 + this.side3 > this.side1){

      return true;
    }
  }
};

// has 2 equal sides
Triangle.prototype.isosceles = function () {
  if(this.sideSame()) {
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
  if (((this.side1 + this.side2) >= this.side3) || ((this.side2 + this.side3) >= this.side1) || ((this.side3 + this.side1) >= this.side2)) {
    if (this.equilateral()) {
      return 2;
    }
    else if (this.isosceles()) {
      return 3;
    }
    else if (((this.side1 + this.side2) <= this.side3) || ((this.side2 + this.side3) <= this.side1) || ((this.side3 + this.side1) <= this.side2)) {
      return 0;
    }
    else if (this.scalene()) {
      return 1;
    }
  }
};


exports.triangleModule = Triangle;
