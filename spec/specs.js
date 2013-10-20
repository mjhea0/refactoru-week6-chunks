var input = [1,2,3,4,5,6,7,8,9,10];

describe('chunk', function() {
  it("splits a javascript array into 2 arrays", function() {
    chunk(input, 2).should.eql([[1,2,3,4,5],[6,7,8,9,10]]);
  });
  it("splits a javascript array into 3 arrays", function() {
    chunk(input, 3).should.eql([[1,2,3,4],[5,6,7],[8,9,10]]);
  });
  it("splits a javascript array into 4 arrays", function() {
    chunk(input, 4).should.eql([[1,2,3],[4,5,6],[7,8],[9,10]]);
  });
  it("splits a javascript array into 7 arrays", function() {
    chunk(input, 7).should.eql([[1,2],[3,4],[5,6],[7],[8],[9],[10]]);
  });
  it("splits a javascript array into 8 arrays", function() {
    chunk(input, 8).should.eql([[1,2],[3,4],[5],[6],[7],[8],[9],[10]]);
  });
});