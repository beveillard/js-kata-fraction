export function sum(fraction1, fraction2) {
  let n1 = numerator(fraction1);
  let n2 = numerator(fraction2);
  let d1 = denominator(fraction1);
  let d2 = denominator(fraction2);

  let sumNumerator = n1 * d2 + n2 * d1;
  let sumDenominator = d1 * d2;

  let sumGcd = gcd(sumNumerator, sumDenominator);

  return String(sumNumerator / sumGcd) + "/" + String(sumDenominator / sumGcd);
}

export function numerator(fraction) {
  let separator = fraction.indexOf('/');

  return Number(fraction.slice(0, separator));
}

export function denominator(fraction) {
  let separator = fraction.indexOf('/');

  return Number(fraction.slice(separator + 1));
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}