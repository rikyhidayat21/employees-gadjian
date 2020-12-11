/**
 * Buatlah function untuk mencetak n bilangan fibonnaci: 0, 1, 1, 2, 3, 5, ...
 * return string fibonnaci dengan delimiter "" (spasi)
 *
 */

function fibonacci(n) {
  let arr = [0];
  let currentValue = 1;
  let previousValue = 0;

  if (n === 1) {
    return arr;
  }

  let counter = n - 1;
  while (counter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    arr.push(previousValue);
    counter--;
  }
  let result = arr.join(" ");
  return result;
}

// console.log(fibonacci(13));
module.exports = fibonacci;
