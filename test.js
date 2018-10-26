var assert = require('assert');

describe('String#split', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});


describe('1 + 1', function(){
  it('returns 2', function(){
    expect(1 + 1).toEqual(2);
  });
});
