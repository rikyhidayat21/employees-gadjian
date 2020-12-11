/**
 * Buatlah function untuk mengembalikan bilangan yang diberikan tanpa menggunakan fungsi string apapun
 *
 *
 */

function reverse(character) {
  let temp = "";
  for (let i = character.length - 1; i >= 0; i--) {
    temp += character[i];
  }
  return temp;
}

console.log(reverse("backend"));
