const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns string if string length is less than columnNum', () => {
    expect(wrap('I love it', 20)).to.equal('I love it');
  });
  it('Returns the same string if string length equals columnNum', () => {
    expect(wrap('Heck yeah', 9)).to.equal('Heck yeah');
  });
  it('Returns a wrapped string', () => {
    
  })
});
