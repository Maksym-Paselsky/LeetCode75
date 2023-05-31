/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let res = 0;
  if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true;

  if (flowerbed[0] == 0 && flowerbed[1] == 0) {
    flowerbed[0] = 1;
    res++;
  }
  if (
    flowerbed[flowerbed.length - 1] == 0 &&
    flowerbed[flowerbed.length - 2] == 0
  ) {
    flowerbed[flowerbed.length - 1] = 1;
    res++;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] == 0) {
      flowerbed[i] = 1;
      res++;
    }
  }
  return res >= n ? true : false;
};

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers2 = function (flowerbed, n) {
  let i = 0;
  for (i; i < flowerbed.length; i++) {
    if (flowerbed[i] == 0) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }
  return n <= 0 ? true : false;
};

canPlaceFlowers([0, 0, 0, 0, 1], 2);
