/**
 * Simple Array Sum
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 */
const simpleArraySumAr: number[] = [1, 2, 3, 4, 10, 11];
function simpleArraySum(array: number[]): number {
  let sum: number = 0;
  for (const value of array) {
    sum += value;
  }
  return sum;
}
// console.log(simpleArraySum(simpleArraySumAr));

/**
 * Diagonal Difference
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 */
const matrixArr1: number[][] = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
function diagonalDifference(arr: number[][]): number {
  let diff: number = 0,
    sumRight: number = 0,
    sumLeft: number = 0,
    IndexToRight: number = 0,
    indexToLeft: number = arr.length - 1;
  for (const value of arr) {
    sumRight += value[IndexToRight];
    IndexToRight++;
    sumLeft += value[indexToLeft];
    indexToLeft--;
  }
  diff = sumRight - sumLeft;
  return Math.abs(diff);
}
// console.table(matrixArr1);
// console.log(diagonalDifference(matrixArr1));

/**
 * Plus Minus
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */
const plusMinusArr: number[] = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr: number[]): void {
  let zero: number = 0,
    positive: number = 0,
    negative: number = 0,
    arrLength: number = arr.length;
  for (const value of arr) {
    const status: number = Math.sign(value);
    switch (status) {
      case -1:
        negative++;
        break;
      case 0:
        zero++;
        break;
      case 1:
        positive++;
        break;
      default:
        break;
    }
  }
  console.log((positive / arrLength).toFixed(6));
  console.log((negative / arrLength).toFixed(6));
  console.log((zero / arrLength).toFixed(6));
}
// plusMinus(plusMinusArr);

/**
 * Staircase
 * https://www.hackerrank.com/challenges/staircase/problem
 */
function staircase(n: number): void {
  for (let i = 1; i <= n; i++) {
    const space: number = n - i;
    const row: string[] = [];
    for (let j = 0; j < space; j++) {
      row.push(' ');
    }
    for (let k = 0; k < i; k++) {
      row.push('#');
    }
    console.log(row.join(''));
  }
}
// staircase(4);

/**
 * Mini-Max Sum
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */
const miniMaxSumArr: number[] = [1, 2, 3, 4, 5];
// const miniMaxSumArr: number[] = [5, 5, 5, 5, 5];
function miniMaxSum(arr: number[]): void {
  const maxIndex: number = arr.findIndex((value) => value === Math.min(...arr));
  const maxValue: number = arr
    .filter((value, index) => index != maxIndex)
    .reduce((a, b) => a + b);
  const minIndex: number = arr.findIndex((value) => value === Math.max(...arr));
  const minValue: number = arr
    .filter((value, index) => index != minIndex)
    .reduce((a, b) => a + b);
  console.log(minValue, maxValue);
}
// miniMaxSum(miniMaxSumArr);

/**
 * Birthday Cake Candles
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */
// const candleStack: number[] = [3, 2, 1, 3];
const candleStack: number[] = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles(candles: number[]): number {
  const tallest: number = Math.max(...candles);
  const howmanyTallest: number = candles.filter((value) => value === tallest)
    .length;
  return howmanyTallest;
}
// console.log(birthdayCakeCandles(candleStack));

/**
 * Time Conversion
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */
const time1: string = '12:40:22AM';
const time3: string = '04:59:59AM';
const time4: string = '12:45:54AM';
function timeConversion(s: string): any {
  const time: string = s.slice(0, -2);
  const unit: string = s.slice(-2);
  let hour: string | number = time.slice(0, 2);
  const minsec: string = time.slice(2);
  if (unit === 'PM') {
    if (hour !== '12') {
      hour = parseInt(hour) + 12;
      if (hour === 24) {
        hour = '00';
      }
    }
  } else if (unit === 'AM') {
    if (hour === '12') {
      hour = '00';
    }
  }

  //   console.log(hour.toString().concat(minsec));
  return hour.toString().concat(minsec);
}
// timeConversion(time1);

/**
 * Grading Students
 * https://www.hackerrank.com/challenges/grading/problem
 */
const grade: number[] = [73, 67, 38, 88];
const grade2: number[] = [37, 38];
function gradingStudents(grades: number[]): number[] {
  const sumGrade: number[] = [];
  const step: number[] = [];
  for (let i = 40; i <= 100; i += 5) {
    step.push(i);
  }
  for (const score of grades) {
    for (const check of step) {
      if (check < 40) {
        sumGrade.push(check);
        break;
      } else if (score > check === false) {
        check - score < 3 ? sumGrade.push(check) : sumGrade.push(score);
        break;
      }
    }
  }
  //   console.log(sumGrade);
  return sumGrade;
}
// gradingStudents(grade);

/**
 * Apple and Orange
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 */
function countApplesAndOranges(
  s: number, // start house location
  t: number, // end houst location
  a: number, // location Apple tree
  b: number, // location Orange tree
  apples: number[], // distances at which each apple falls from the tree
  oranges: number[] //distances at which each orange falls from the tree
): void {
  let newApples: number[] = [],
    newOranges: number[] = [];
  apples.forEach((v) => newApples.push(v + a));
  oranges.forEach((v) => newOranges.push(v + b));
  // console.log(newApples, newOranges);
  newApples = newApples.filter((v) => v >= s && v <= t);
  newOranges = newOranges.filter((v) => v >= s && v <= t);
  console.log(newApples.length);
  console.log(newOranges.length);
}
// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

/**
 * Number Line Jumps
 * https://www.hackerrank.com/challenges/kangaroo/problem
 */
function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  const OK: string = 'YES',
    NO: string = 'NO';
  // Out of exception range
  if (x1 === x2 && v1 === v2) {
    return OK;
  } else if (x1 === x2 && v1 !== v2) {
    return NO;
  }
  let longestStart: string;
  x1 > x2 ? (longestStart = 'x1') : (longestStart = 'x2');
  // console.log(longestStart);
  switch (longestStart) {
    case 'x1':
      if (v1 >= v2) {
        return NO;
      }
    case 'x2':
      if (v2 >= v1) {
        return NO;
      }
  }
  // Have chance
  let posKangaroo1: number = x1,
    posKangaroo2: number = x2;
  for (let i = 0; i < 10000; i++) {
    posKangaroo1 += v1;
    posKangaroo2 += v2;
    if (posKangaroo1 === posKangaroo2) {
      return OK;
    }
  }
  return NO;
}
// kangaroo(0, 3, 4, 2);
// kangaroo(0, 2, 5, 3);
// kangaroo(6, 3, 6, 3);
// kangaroo(28, 8, 96, 2);

/**
 * Breaking the Records
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */
const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// const scores: number[] = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
function breakingRecords(scores: number[]): number[] {
  let highest: number = scores[0],
    lowest: number = scores[0],
    highestCount: number = 0,
    lowestCount: number = 0;
  for (const value of scores) {
    if (value > highest) {
      highest = value;
      highestCount++;
    }
    if (value < lowest) {
      lowest = value;
      lowestCount++;
    }
  }
  // console.log(highestCount, lowestCount);
  const sum: number[] = [highestCount, lowestCount];
  return sum;
}
// breakingRecords(scores);

/**
 * Divisible Sum Pairs
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */
function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let pairs: number = 0;
  for (let i = 0; i < n; i++) {
    let newarr: number[] = ar.filter((value, index) => index > i);
    for (const value of newarr) {
      if ((ar[i] + value) % k === 0) {
        pairs++;
      }
    }
  }
  return pairs;
}
// divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);

/**
 * Migratory Birds
 * https://www.hackerrank.com/challenges/migratory-birds/problem
 * 1/6 test case failed
 */
function migratoryBirds(arr: number[]): number {
  // create
  let stack: any = {};
  for (const value of arr) {
    stack[value] = 0;
  }
  // count
  for (let i = 0; i < arr.length; i++) {
    stack[arr[i]]++;
  }
  // check
  let stackAr: any[] = Object.entries(stack);
  let pos: number = 0;
  for (let j: number = 0; j < stackAr.length; j++) {
    if (j !== stackAr.length - 1) {
      if (stackAr[j][1] < stackAr[j + 1][1]) {
        pos = j + 1;
      }
    }
  }
  let sum: number = stackAr[pos][0];
  return sum;
}
// migratoryBirds([1, 4, 4, 4, 5, 3]);
// migratoryBirds([2, 4, 3, 2, 3, 1, 2, 1, 3, 3]);
// migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);

/**
 * Sales by Match
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */
function sockMerchant(n: number, ar: number[]): number {
  let matching: number = 0;
  const check: any = {};
  let obj: [string, number][];
  // create
  for (const key of ar) {
    check[key] = 0;
  }
  // check
  for (const val of ar) {
    check[val]++;
  }
  // count
  obj = Object.entries(check);
  obj.map((el) => {
    matching += Math.floor(el[1] / 2);
  });
  return matching;
}
// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

/**
 * Bill Division
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 */
function bonAppetit(bill: number[], k: number, b: number): void {
  let totalBill: number;
  let arr: number[] = bill.filter((value, index) => index != k);
  totalBill = arr.reduce((a, b) => a + b);
  totalBill = b - totalBill / 2;
  totalBill <= 0 ? console.log('Bon Appetit') : console.log(totalBill);
}
// bonAppetit([3, 10, 2, 9], 1, 12);
// bonAppetit([3, 10, 2, 9], 1, 7);
