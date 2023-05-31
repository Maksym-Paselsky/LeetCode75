/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let arr = s.split("");
  const v = ["a", "e", "i", "o", "u"];
  const indexes = [];
  const letters = [];
  for (let i = 0; i < s.length; i++) {
    if (v.includes(s[i].toLowerCase())) {
      letters.push(s[i]);
      indexes.push(i);
    }
  }
  for (let i = 0; i < indexes.length; i++) {
    arr[indexes[i]] = letters.pop();
  }
  return arr.join("");
};

console.log(reverseVowels("hello"));
