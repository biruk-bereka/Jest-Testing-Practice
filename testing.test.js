const stringLength = require('./stringLength')
const reverseString = require('./reverseString')
const Calculator = require('./calculator');
const capitalize = require('./capitalize')

test('string length: test 1', () => {
  expect(stringLength('hello')).toBe(5);
});

test('string length: test 2', () => { 
    expect(() => stringLength('hello there!')).toThrow(Error);
 })

 test('string length: test 3', () => { 
  expect(() => stringLength('')).toThrow(Error);
})

test('reverse string: test 1', ()=>{
  const test = 'abcd'
  expect(reverseString(test)).toMatch(/dcba/);
})

test('reverse string: test 2', ()=>{
  const test = 'hello there'
  expect(reverseString(test)).toMatch(/ereht olleh/);
})

describe('Calculator Test Cases: ',()=>{

  describe('Addition Case: ', ()=>{
    test('test 1', ()=>{
      expect(Calculator.add(4,2)).toBe(6);
    });
    test('test 2', ()=>{
      expect(Calculator.add(-9,119)).toBe(110);
    });
    test('test 3', ()=>{
      expect(Calculator.add(100,-1000)).toBe(-900);
    });
  })

  describe('Substraction Case: ', ()=>{
      test('test 1', ()=>{
        expect(Calculator.substract(1,1)).toBe(0);
      });
      test('test 2', () => {
        expect(Calculator.substract(-10,2)).toBe(-12);
      });
      test('test 3', ()=> {
        expect(Calculator.substract(-10,-20)).toBe(10);
      });
  })

  describe('Division Case: ', () => {
    test('test 1', ()=>{
      expect(Calculator.divide(2,1)).toBe(2);
    });
    test('test 2', () => {
      expect(Calculator.divide(2,10)).toBe(0.2);
    });
    test('test 3', ()=> {
      expect(()=>calculator.divide(5,0)).toThrow(Error);
    });
  })

  describe('Multiplication Case: ', ()=>{
    test('test 1', ()=>{
      expect(Calculator.multiply(10,1)).toBe(10);
    });
    test('test 2', ()=>{
      expect(Calculator.multiply(10,0)).toBe(0);
    })
    test('test 3', ()=>{
      expect(Calculator.multiply(10,2)).toBe(20);
    })
  })
})

describe('Capitalize function cases: ', ()=>{
    test('test 1', ()=>{
      expect(capitalize('hello')).toMatch(/Hello/);
    });
    test('test 2', ()=>{
      expect(capitalize('Hello')).toMatch(/Hello/);
    });
})

