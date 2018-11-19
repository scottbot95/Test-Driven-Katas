const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Should return an empty array if given an empty array', () => {
    expect(twoSum([])).to.deep.equal([]);
  });
  it('Should return an empty array if argument array does not contain the target sum', () => {
    expect(twoSum([2, 3], 7)).to.deep.equal([]);
    expect(twoSum([2, 3, 9, 4, 10], 8)).to.deep.equal([]);
    expect(twoSum([2, 3, -1, -7], 7)).to.deep.equal([]);
  });
  it('Returns an array of indices if the target sound can be made', () => {
    expect(twoSum([2, 3], 5)).to.deep.equal([0, 1]);
    expect(twoSum([2, 3, -1, 4], 3)).to.deep.equal([2, 3]);
    expect(twoSum([2, 3, -1, -8, 87, 17], 9)).to.deep.equal([3, 5]);
  });
});
