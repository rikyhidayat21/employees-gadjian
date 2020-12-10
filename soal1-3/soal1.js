/**
 * Buatlah function untuk mengembalikan bilangan yang diberikan tanpa menggunakan fungsi string apapun
 *
 *
 */

function reverseWord(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
}

console.log(reverseWord("backend"));
