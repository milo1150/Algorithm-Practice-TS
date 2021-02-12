/**
 * Palindrome Index
 * https://www.hackerrank.com/challenges/palindrome-index/problem
 * what is this
 */
function palindromeIndex(s: string): number {
  let Forward: number[] = [];
  let Backward: number[] = [];
  let delIndex: number = -1;
  const diff: number[] = [];
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    Forward.push(s.charCodeAt(i));
    Backward.push(s.charCodeAt(j));
  }
  for (let k = 0; k < s.length; k++) {
    if (Forward[k] !== Backward[k]) diff.push(k);
  }
  if (diff.length === 0) return delIndex;

  let indexDel: number = diff[0];
  let s1: string = s.slice(0, indexDel);
  let s2: string = s.slice(indexDel + 1, s.length);
  let s3: string = s1.concat(s2);
  let error: boolean = false;
  (Forward = []), (Backward = []);
  for (let i = 0, j = s3.length - 1; i < s3.length; i++, j--) {
    Forward.push(s3.charCodeAt(i));
    Backward.push(s3.charCodeAt(j));
  }
  for (let k = 0; k < s.length; k++) {
    if (Forward[k] !== Backward[k]) {
      error = true;
      break;
    }
  }
  if (!error) delIndex = diff[0];
  else delIndex = diff[diff.length - 1];
  return delIndex;
}
// palindromeIndex('aaab');
// palindromeIndex('baa');
// palindromeIndex('aaa');

/**
 * Missing Numbers
 * https://www.hackerrank.com/challenges/missing-numbers/problem
 */
type missingNum = { [index: string]: number };
function missingNumbers(arr: number[], brr: number[]): number[] {
  const objOne: missingNum = {};
  const objTwo: missingNum = {};
  const missNum: number[] = [];
  for (let i of arr) {
    if (!objOne[i]) objOne[i] = 1;
    else objOne[i]++;
  }
  for (let i of brr) {
    if (!objTwo[i]) objTwo[i] = 1;
    else objTwo[i]++;
  }
  for (let key of Object.keys(objTwo)) {
    const objOneValue: number = objOne[key];
    const objTwoValue: number = objTwo[key];
    if (objOneValue !== objTwoValue) missNum.push(parseInt(key));
  }
  return missNum;
}
// missingNumbers([7, 2, 5, 3, 5, 3], [7, 2, 5, 4, 6, 3, 5, 3]);
// missingNumbers(
//   [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
//   [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
// );

/**
 * Ice Cream Parlor
 * https://www.hackerrank.com/challenges/icecream-parlor/problem
 */
function icecreamParlor(m: number, arr: number[]): number[] {
  const check: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === m) {
        check.push(i + 1);
        check.push(j + 1);
        break;
      }
    }
  }
  return check;
}
// icecreamParlor(4, [1, 4, 5, 3, 2]);
// icecreamParlor(4, [2, 2, 4, 3]);
// icecreamParlor(9, [1, 3, 4, 6, 7, 9]);
// icecreamParlor(8, [1, 3, 4, 4, 6, 8]);
// icecreamParlor(3, [1, 2]);

/**
 * Two Strings
 * https://www.hackerrank.com/challenges/two-strings/problem
 */
type twoStr = 'YES' | 'NO';
function twoStrings(s1: string, s2: string): twoStr {
  let status: twoStr = 'NO';
  for (let i of s2) {
    if (s1.includes(i)) {
      status = 'YES';
      break;
    }
  }
  return status;
}
// twoStrings('wouldyoulikefries', 'abcabcabcabcabcabc');
// twoStrings('hackerrankcommunity', 'cdecdecdecde');
// twoStrings('jackandjill', 'wentupthehill');
// twoStrings('writetoyourparents', 'fghmqzldbc');

/**
 * String Construction
 * https://www.hackerrank.com/challenges/string-construction/problem
 */
type strCon = { [index: string]: number };
function stringConstruction(s: string): number {
  const count: strCon = {};
  let cost: number = 0;
  for (let i of s) {
    if (!count[i]) {
      count[i] = 1;
      cost++;
    }
  }
  return cost;
}
// stringConstruction('scfg');
// stringConstruction('bccb');
// stringConstruction('abcd');
// stringConstruction('abab');

/**
 * Sherlock and Array
 * https://www.hackerrank.com/challenges/sherlock-and-array/problem
 * damn bruh
 */
type balanceSum = 'YES' | 'NO';
function balancedSums(arr: number[]): balanceSum {
  let status: balanceSum = 'NO';
  let left: number = 0;
  let right: number = arr.reduce((acc, val) => acc + val);
  for (let i = 0; i < arr.length; i++) {
    const curVal: number = arr[i];
    if (i !== 0) left += arr[i - 1];
    right -= curVal;
    if (left === right) {
      status = 'YES';
      break;
    }
  }
  // console.log('status:', status);

  /* SLOW */
  // for (let i = 0; i < arr.length; i++) {
  //   console.log('current value:', arr[i]);
  //   let left: number = 0;
  //   let right: number = 0;
  //   for (let j = i - 1; j >= 0; j--) {
  //     console.log('j:', arr[j]);
  //     left += arr[j];
  //   }
  //   for (let k = i + 1; k < arr.length; k++) {
  //     console.log('k:', arr[k]);
  //     right += arr[k];
  //   }
  //   console.log('left:', left);
  //   console.log('right:', right);
  //   if (left === right) {
  //     status = 'YES';
  //     break;
  //   }
  // }
  return status;
}
// balancedSums([1, 2, 3]);
// balancedSums([1, 2, 3, 3]);
// balancedSums([1, 1, 4, 1, 1]);
// balancedSums([2, 0, 0, 0]);
// balancedSums([0, 0, 2, 0]);
// balancedSums([1]);

/**
 * Minimum Absolute Difference in an Array
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 */
function minimumAbsoluteDifference(arr: number[]): number {
  const sortArr: number[] = arr.sort((a, b) => a - b);
  let min: number = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff: number = Math.abs(sortArr[i] - sortArr[j]);
      if (!min) min = diff;
      else if (diff === 0) {
        min = diff;
        break;
      } else if (diff > min) break;
      else if (diff < min) min = diff;
    }
    if (min === 0) break;
  }
  return min;
}
// minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]);
// minimumAbsoluteDifference([1, -3, 71, 68, 17]);

/**
 * Luck Balance
 * https://www.hackerrank.com/challenges/luck-balance/problem
 */
function luckBalance(k: number, contests: Array<[number, number]>): number {
  let luck: number[] = [];
  let luck2: number = 0;
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 1) luck.push(contests[i][0]);
    else if (contests[i][1] === 0) luck2 += contests[i][0];
  }
  luck.sort((a, b) => b - a);
  let sum: number = 0;
  for (let i = 0; i < luck.length; i++) {
    if (i < k) sum += luck[i];
    else sum -= luck[i];
  }
  return sum + luck2;
}
// luckBalance(3, [
//   [5, 1],
//   [2, 1],
//   [1, 1],
//   [8, 1],
//   [10, 0],
//   [5, 0],
// ]);

/**
 * Grid Challenge
 * https://www.hackerrank.com/challenges/grid-challenge/problem
 */
type gridEx = 'YES' | 'NO';
function gridChallenge(grid: string[]): gridEx {
  let status: gridEx = 'YES';
  const gridSort: string[] = [];
  for (let i = 0; i < grid.length; i++) {
    let strSort: string = grid[i].split('').sort().join('');
    gridSort.push(strSort);
  }
  const strLength: number = gridSort[0].length;
  const gridSortLength: number = gridSort.length;
  for (let i = 0; i < strLength; i++) {
    for (let j = 0; j < gridSortLength - 1; j++) {
      const currentChar: string = gridSort[j];
      const nextChar: string = gridSort[j + 1];
      if (nextChar.charCodeAt(i) < currentChar.charCodeAt(i)) {
        status = 'NO';
        break;
      }
    }
    if (status === 'NO') break;
  }
  return status;
}
// gridChallenge(['eabcd', 'fghij', 'olkmn', 'trpqs', 'xywuv']);
// gridChallenge(['abc', 'lmp', 'qrt']);
// gridChallenge(['mpxz', 'abcd', 'wlmf']);
// gridChallenge(['abc', 'hjk', 'mpq', 'rtv']);
// gridChallenge(['kc', 'iu']);
// gridChallenge(['uxf', 'vof', 'hmp']);
// gridChallenge(['ppp', 'ypp', 'wyw']);
// gridChallenge(['lyivr', 'jgfew', 'uweor', 'qxwyr', 'uikjd']);
// gridChallenge(['l']);
