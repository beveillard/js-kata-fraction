export class fraction {
  numerator: number;
  denominator: number;
}

export function sum(f1: fraction, f2: fraction): fraction {
  const sumNumerator = f1.numerator * f2.denominator + f2.numerator * f1.denominator;
  const sumDenominator = f1.denominator * f2.denominator;
  const sumGcd = gcd(sumNumerator, sumDenominator);

  return {
    numerator: sumNumerator / sumGcd,
    denominator: sumDenominator / sumGcd,
  };
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}
