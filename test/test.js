var code = require('../main');
var expect = require('chai').expect;

describe('fizzBuzz', function(){
	it('should print "FizzBuzz" for numbers divisible by 3 and 5', function(){
		expect(code.fizzBuzz(15)).to.equal("FizzBuzz,1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz");
		});

it('should print "Fizz" for numbers divisible by 3', function(){
	expect(code.fizzBuzz(3)).to.equal("FizzBuzz,1,2,Fizz");
	});

	it('should print "Buzz" for number divisible by 5', function(){
		expect(code.fizzBuzz(5)).to.equal("FizzBuzz,1,2,Fizz,4,Buzz");
		});

  it('should print the number for numbers not divisible by 3 or 5', function(){
    expect(code.fizzBuzz(2)).to.equal("FizzBuzz,1,2");
      });

});
