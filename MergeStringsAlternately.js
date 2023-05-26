/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
// my solution
var mergeAlternately = function (word1, word2) {
  // split words to arrays of letter
  // separate indexes for lenght i.j
  // iterate arr1 switching arr2
  // if no value in arr2 use arr1
  // if last step use for loop for arr2 to finish

  // Retro
  // split not needed we can manupulate with string as arrays
  /**
   *instead of assuming that first word is greater and check it with if clause
   *could just iterate two words till one of them ends
   *then compare lenght of pointer with words and append remaining characters
   */
  let arr3 = [];
  let i = 0;
  let j = 0;
  let l = 0;

  while (l < word1.length * 2) {
    if (l % 2 == 0) {
      arr3.push(word1[i]);
      i++;
    } else {
      arr3.push(word2[j]);
      j++;
    }
    if (i == word1.length) {
      while (word2[j]) {
        arr3.push(word2[j]);
        j++;
      }
    }
    l++;
  }

  return arr3.join("");
};

const res1 = mergeAlternately("abc", "pqr");
console.log('exprected : "apbqcr"');
console.log(`result: ${res1}`);

// other solution

var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  let j = 0;

  if (i < word1.length || i < word2.length) {
    if (i < word1.length) {
      result += word1[i];
      i++;
    }
    if (j < word2.length) {
      result += word2[j];
      j++;
    }
  }

  return result;
};

// cool solution
var mergeAlternately = function (word1, word2) {
  let maxLength = Math.max(word1.length, word2.length);
  let str = "";
  for (let i = 0; i < maxLength; i++) {
    str += (word1[i] || "") + (word2[i] || "");
  }
  return str;
};
