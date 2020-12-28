import { sum, numerator, denominator } from ".";

describe("Test of numerator()", function () {

  it("Should return 1", function () {
    expect(numerator("1/2")).toEqual(1);
  });

});

describe("Test of denominator()", function () {

  it("Should return 2", function () {
    expect(denominator("1/2")).toEqual(2);
  });

});

describe("Test of sum()", function () {

  it("Should return 11/15", function () {
    expect(sum("1/3", "2/5")).toEqual("11/15");
  });

  it("Should return 1/1", function () {
    expect(sum("1/2", "1/2")).toEqual("1/1");
  });

});
