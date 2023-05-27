/**
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// my solution
var gcdOfStrings = function (str1, str2) {
  let i;
  let len;
  let gcd = "";
  // find gcd of str1 and str2
  for (i = 1; i <= str1.length && i <= str2.length; i++) {
    if (str1.length % i == 0 && str2.length % i == 0) {
      len = i;
    }
  }
  i = 0;
  // check if gcd is a substring of str1 and str2
  while (str1.length > i && str2.length > i) {
    if (str1[i] == str2[i]) {
      gcd += str1[i];
      if (
        gcd.repeat(str1.length / gcd.length) == str1 &&
        gcd.repeat(str2.length / gcd.length) == str2 &&
        gcd.length == len
      ) {
        return gcd;
      }
    } else {
      return "";
    }
    i++;
  }
  return "";
};

/**
 * nice solution
 * str1+str2 == str2+str1 if and only if str1 and str2 have a gcd .
 * Both the strings are made of same substring added multiple times.
 * Since they are multiples, next step is simply to find the gcd of the lengths of 2 strings e.g. gcd(6,3) = 3, (we can use gcd function to find that)and get the substring of length 3 from either str1 or str2.
 */

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";

  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
  return str1.substring(0, gcd(str1.length, str2.length));
};
