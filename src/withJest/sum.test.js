const sum = require('./sum')

test('sum function', () => {
    expect(sum(2,3)).toBe(5);
})