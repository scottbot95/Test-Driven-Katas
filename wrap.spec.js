const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns string if string length is less than columnNum', () => {
    expect(wrap('I love it', 20)).to.equal('I love it');
  });
  it('Returns the same string if string length equals columnNum', () => {
    expect(wrap('Heck yeah', 9)).to.equal('Heck yeah');
  });
  it('Returns a single word wrapped if string is slightly to long', () => {
    expect(wrap('Lorem ipsum dolor sit', 20)).to.equal(
      'Lorem ipsum dolor\nsit'
    );
  });
  it('Behaves strangley when words are too small', () => {
    expect(wrap('love', 3)).to.equal('love');
  });
  it('Returns a wrapped string', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
  it('Handles varied column lengths properly', () => {
    const lorem =
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.';

    expect(wrap(lorem, 10)).to.equal(
      'Lorem\nipsum\ndolor sit\neu amet,\nelit na\nmagna sem\namet nulla\nvel purus\nac ligula.'
    );

    expect(wrap(lorem, 15)).to.equal(
      'Lorem ipsum\ndolor sit eu\namet, elit na\nmagna sem amet\nnulla vel purus\nac ligula.'
    );
  });
});
