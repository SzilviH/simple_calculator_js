describe('Calculator', function() {
  var calc;

  beforeEach(function() {
    calc = new Calculator();
  });

  describe('multiply', function(){
    it('can multiply two numbers', function(){
      expect(calc.multiply(2,3)).toEqual(6);
      expect(calc.multiply(2.35, 3.42)).toEqual(8.037);
    });
  });

  describe('add', function(){
    it('can add up two numbers', function(){
      expect(calc.add(2,3)).toEqual(5);
      expect(calc.add(2.35, 3.42)).toEqual(5.77);
    });
  });

  describe('divide', function(){
    it('can divide two numbers', function(){
      expect(calc.divide(6,2)).toEqual(3);
      expect(calc.divide(8,5)).toEqual(1.6);
    });
    it('throws an error if user tries to divide by 0', function(){
      expect(function(){
        calc.divide(6,0);}).toThrowError('Cannot divide a number by 0!');
    });
  });

  describe('subtract', function(){
    it('can subtract a number from another number', function(){
      expect(calc.subtract(6,2)).toEqual(4);
      expect(calc.subtract(7.42,4.12)).toEqual(3.3);
    });
  });

  describe('square', function(){
    it('can square a number', function(){
      expect(calc.square(3)).toEqual(9);
      expect(calc.square(4.2)).toEqual(17.64);
    });
  });
});
