/**
 * Buatlah function untuk menghitung kombinasi dan permutasi
 */

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) {
    result *= i;
  }
  return result;
}
// console.log(factorial(4));

function combination(n, r) {
  let n1 = factorial(n);
  let r1 = factorial(r);

  let result = n1 / (r1 * (n - r));
  return result;
}

// console.log(combination(4, 2));

module.exports = combination;
