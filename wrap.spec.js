const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Takes space into consideration', () => {
    expect(wrap("cat dog bird", 5)).to.equal("cat \ndog \nbird");
  });
  it('doesnt add a space if theres a new line', () => {
    expect(wrap("cat dog pup bat", 3)).to.equal("cat\ndog\npup\nbat");
  });
  it('breaks up the word if it is longer than max len', () => {
    expect(wrap("cat dog bird", 2)).to.equal("ca\nt \ndo\ng \nbi\nrd");
  });
});