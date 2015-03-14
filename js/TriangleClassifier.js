var TriangleClassifier = function() {

  this.classify = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a == b && b == c)
    {
      return "equilateral";
    }
    else if ((a == b && b != c) || (a != b && b == c))
    {
      return "isosceles";
    }
    else
    {
      return "scalene";
    }
  };
};
