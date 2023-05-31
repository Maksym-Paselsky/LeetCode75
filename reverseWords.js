/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  arr = s.split(" ");
  let trimmed = [];
  for (let word of arr) {
    if (word !== "") {
      trimmed.push(word);
    }
  }
  let start = 0;
  let end = trimmed.length - 1;
  while (start < end) {
    let temp = trimmed[start];
    trimmed[start] = trimmed[end];
    trimmed[end] = temp;
    start++;
    end--;
  }
  return trimmed.join(" ");
};
