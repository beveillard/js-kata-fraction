import { fraction, sum } from ".";

describe("Test of sum()", function () {

  it("Should return 11/15", function () {
    // Given
    const f1 = { numerator: 1, denominator: 3 };
    const f2 = { numerator: 2, denominator: 5 };
    // When
    const s = sum(f1, f2);
    // Then
    expect(s).toEqual({ numerator: 11, denominator: 15 });
  });

  it("Should return 1/1", function () {
    // Given
    const f1 = { numerator: 1, denominator: 2 };
    const f2 = { numerator: 1, denominator: 2 };
    // When
    const s = sum(f1, f2);
    // Then
    expect(s).toEqual({ numerator: 1, denominator: 1 });
  });

});
