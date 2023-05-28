/**
 * 
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.
 */
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandy = (a, b) => (a > b ? a : b);
  let max = 0;
  let arr = [];
  for (let i = 0; i < candies.length; i++) {
    max = maxCandy(max, candies[i]);
  }
  for (let j = 0; j < candies.length; j++) {
    candies[j] + extraCandies >= max ? arr.push(true) : arr.push(false);
  }
  return arr;
};
