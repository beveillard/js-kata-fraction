export function sum(f1, f2) {
  let sumNumerator = f1[0] * f2[1] + f2[0] * f1[1];
  let sumDenominator = f1[1] * f2[1];
  let sumGcd = gcd(sumNumerator, sumDenominator);

  return [sumNumerator / sumGcd, sumDenominator / sumGcd];
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}