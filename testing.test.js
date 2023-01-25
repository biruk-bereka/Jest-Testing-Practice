const stringLength = require('./stringLength')
const reverseString = require('./reverseString')

test('string length 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('string to throw an error', () => { 
    expect(() => stringLength('hello there!')).toThrow(Error);
 })

 test('string to throw an error', () => { 
  expect(() => stringLength('')).toThrow(Error);
})

test('abcd', ()=>{
  const test = 'abcd'
  expect(reverseString(test)).toMatch(/dcba/);
})