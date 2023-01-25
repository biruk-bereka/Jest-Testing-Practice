const stringLength = require('./stringLength')

test('string length 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('string to throw an error', () => { 
    expect(() => stringLength('hello there!')).toThrow(Error);
 })

 test('string to throw an error', () => { 
  expect(() => stringLength('')).toThrow(Error);
})

