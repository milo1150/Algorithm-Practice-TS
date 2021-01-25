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

/**
 * Drawing Book
 * https://www.hackerrank.com/challenges/drawing-book/problem
 */
function pageCount(n: number, p: number): number {
  let count: number = 0,
    openToRight: number = 0,
    openToLeft: number = 0;
  let arr: number[] = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  // console.log('TO RIGHT');
  for (let i = 0, j = 0; j <= arr.length; j += 2, i++) {
    // console.log('j:', j, 'i:', i);
    if (j === p || j + 1 === p) {
      openToRight = i;
      break;
    }
  }
  // console.log('TO LEFT');
  let startFromRight: number = arr.length;
  arr.length % 2 !== 0 ? (startFromRight = arr.length - 1) : null;
  for (let i = 0, j = startFromRight; j > 0; j -= 2, i++) {
    // console.log('j:', j, 'i:', i);
    if (j === p || j + 1 === p) {
      openToLeft = i;
      break;
    }
  }
  // console.log(openToRight, openToLeft);
  openToRight > openToLeft ? (count = openToLeft) : (count = openToRight);
  return count;
}
// pageCount(6, 2);
// pageCount(5, 4);
// pageCount(10, 5);

/**
 * Counting Valleys
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 */
function countingValleys(steps: number, path: string[]): number {
  type status = 'sea' | 'under-sea' | 'over-sea';
  let valley: number = 0,
    checkzero: number = 0,
    currentStatus: status = 'sea';
  for (const v of path) {
    const check: status[] = [];
    check.push(currentStatus);
    switch (v) {
      case 'U':
        valley++;
        break;
      case 'D':
        valley--;
        break;
    }
    switch (Math.sign(valley)) {
      case 0:
        currentStatus = 'sea';
        check.push(currentStatus);
        break;
      case 1:
        currentStatus = 'over-sea';
        check.push(currentStatus);
        break;
      case -1:
        currentStatus = 'under-sea';
        check.push(currentStatus);
        break;
    }
    if (check[0] === 'under-sea' && check[1] === 'sea') {
      checkzero++;
    }
  }
  // console.log(checkzero);
  return checkzero;
}
// countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']);

/**
 * Electronics Shop
 * https://www.hackerrank.com/challenges/electronics-shop/problem
 */
function getMoneySpent(
  keyboards: number[],
  drives: number[],
  b: number
): number {
  let BestDiffVal: number = b,
    BestDiffPos: number = 0,
    BestVal: number = 0;
  const stack: number[] = [];
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum: number = keyboards[i] + drives[j];
      stack.push(sum);
    }
  }
  // console.log(stack);
  for (let i = 0; i < stack.length; i++) {
    let diff: number = b - stack[i];
    if (diff <= BestDiffVal && diff >= 0) {
      BestDiffVal = diff;
      BestDiffPos = i;
    }
  }
  b === BestDiffVal ? (BestVal = -1) : (BestVal = stack[BestDiffPos]);
  return BestVal;
}
// getMoneySpent([3, 1], [5, 2, 8], 10);
// getMoneySpent([4], [5], 5);

/**
 * Cat and a Mouse
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */
function catAndMouse(x: number, y: number, z: number): string {
  type output = 'Cat A' | 'Cat B' | 'Mouse C' | '';
  let range: output = '';
  let catArange = Math.abs(x - z);
  let catBrange = Math.abs(y - z);
  if (catArange < catBrange) {
    range = 'Cat A';
  } else if (catBrange < catArange) {
    range = 'Cat B';
  } else if (catArange === catBrange) {
    range = 'Mouse C';
  }
  return range;
}

/**
 * Picking Numbers
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 */
function pickingNumbers(a: number[]): number {
  const header: number[] = a.sort().filter((value, index, arr) => {
    return arr[index] !== arr[index + 1];
  });
  let stack: Array<number[]> = [];
  for (let i = 0; i < header.length; i++) {
    const subStack: number[] = [];
    for (let j = 0; j < a.length; j++) {
      let sum: number = header[i] - a[j];
      if (sum === 0 || sum === -1) subStack.push(a[j]);
    }
    stack.push(subStack);
  }
  let final: number = stack[0].length;
  for (let i = 0; i < stack.length - 1; i++) {
    if (stack[i + 1].length > final) {
      final = stack[i + 1].length;
    }
  }
  return final;
}
// pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);
// pickingNumbers([4, 6, 5, 3, 3, 1]);
// pickingNumbers([1, 2, 2, 3, 1, 2]);

/**
 * The Hurdle Race
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */
function hurdleRace(k: number, height: number[]): number {
  let potion: number = 0;
  for (const v of height) {
    let diff: number = k - v;
    diff < potion ? (potion = diff) : null;
  }
  return Math.abs(potion);
}
// hurdleRace(4, [1, 6, 3, 5, 2]);
// hurdleRace(7, [2, 5, 4, 5, 2]);

/**
 * Designer PDF Viewer
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */
function designerOdfViewer(h: number[], word: string): number {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  const stack: number[] = [];
  let max: number = 0;
  for (let w of word) {
    let pos: number = alphabet.indexOf(w);
    stack.push(h[pos]);
  }
  for (let v of stack) if (v > max) max = v;
  return max * stack.length;
}

/**
 * Utopian Tree
 * https://www.hackerrank.com/challenges/utopian-tree/problem
 */
function utopianTree(n: number): number {
  let max: number = n;
  let height: number = 1;
  const stack: number[] = [];
  for (let i = 0; i <= max; i++) {
    if (i === 0) height = 1;
    else if (i % 2 === 0) height += 1;
    else if (i % 2 !== 0) height *= 2;
    stack.push(height);
  }
  return stack[n];
}
// utopianTree(5);

/**
 * Angry Professor
 * https://www.hackerrank.com/challenges/angry-professor/problem
 */
type cancelClass = 'YES' | 'NO';
function angryProfessor(k: number, a: number[]): cancelClass {
  let ok: number = 0,
    sum: number = 0,
    cancel: cancelClass = 'NO';
  for (const v of a) {
    if (Math.sign(v) === -1 || Math.sign(v) === 0) ok++;
  }
  sum = k - ok;
  sum <= 0 ? (cancel = 'NO') : (cancel = 'YES');
  return cancel;
}
// angryProfessor(3, [-1, -3, 4, 2]);
// angryProfessor(2, [0, -1, 2, 1]);
// angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]);

/**
 * Beautiful Days at the Movies
 * https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 * hide console.log inside this function because it affect long time to exe
 */
function beautifulDays(i: number, j: number, k: number): number {
  let countBeautiful: number = 0;
  for (let s = i; s <= j; s++) {
    let newNum: string[] | number = [];
    let oldNum: string[] = s.toString().split('');
    for (let i = oldNum.length - 1; i >= 0; i--) {
      newNum.push(oldNum[i]);
    }
    newNum = parseInt(newNum.join(''));
    let beautiful: number = Math.abs((s - newNum) / k);
    if (Number.isInteger(beautiful)) countBeautiful++;
  }
  return countBeautiful;
}
// beautifulDays(20, 23, 6);
// beautifulDays(1230, 1235, 7);
// beautifulDays(819945, 946749, 8946432);

/**
 * Viral Advertising
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 */
function viralAdvertising(n: number): number {
  const adsTable: number[][] = [];
  let shared: number = 5;
  for (let i = 1; i <= n; i++) {
    // Array
    const dayArr: number[] = [];
    // Day
    dayArr.push(i);
    // Shared
    if (i === 1) dayArr.push(shared);
    else {
      shared = Math.floor(shared / 2) * 3;
      dayArr.push(shared);
    }
    // Liked
    let liked: number = Math.floor(shared / 2);
    dayArr.push(liked);
    // Cumulative
    let cumulative: number = 0;
    if (i === 1) dayArr.push(Math.floor(shared / 2));
    else {
      cumulative = adsTable[i - 2][3] + Math.floor(liked);
      dayArr.push(cumulative);
    }
    // Push
    adsTable.push(dayArr);
  }
  // console.table(adsTable);
  return adsTable[n - 1][3];
}
// viralAdvertising(3);

/**
 * Save the Prisoner
 * https://www.hackerrank.com/challenges/save-the-prisoner/problem
 * Terminated due to timeout :(
 */
function saveThePrisoner(n: number, m: number, s: number): number {
  console.time('start');
  let prisoner: number = n,
    sweets: number = m,
    seat: number = s;
  let lastNumber: number = s;
  for (let i = 0; i < sweets - 1; i++) {
    // console.log(lastNumber)
    if (seat === prisoner) {
      seat = 0;
    }
    seat++;
    lastNumber = seat;
  }
  console.log(lastNumber);
  console.timeEnd('start');
  return lastNumber;
}
// saveThePrisoner(7, 19, 2);
// saveThePrisoner(352926151, 380324688, 94730870);

/**
 * Circular Array Rotation
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */
function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[]
): number[] {
  const stack: Array<number> = a;
  for (let i = 0; i < k; i++) {
    let lastIndex: any = stack.pop();
    stack.splice(0, 0, lastIndex);
  }
  const returnQ: number[] = [];
  for (const v of queries) {
    returnQ.push(stack[v]);
  }
  return returnQ;
}
// circularArrayRotation([1, 2, 3], 2, [0, 1, 2]);
// circularArrayRotation([3, 4, 5], 2, [1, 2]);

/**
 * Jumping on the Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 */
type cloud = 0 | 1;
function jumpingOnClouds(c: cloud[], k: number): number {
  // console.table(c);
  let energy: number = 100;
  let currentIndex: number = 0;
  let status: boolean = true;
  while (status) {
    if (currentIndex >= c.length) {
      let over: number = currentIndex - c.length;
      currentIndex = over;
      // Back to start position c[0]
      if (currentIndex === 0) {
        if (c[currentIndex] === 0) energy -= 1;
        else if (c[currentIndex] === 1) energy -= 3;
        break;
      }
    }
    // current position is not c[0]
    if (currentIndex !== 0) {
      if (c[currentIndex] === 0) energy -= 1;
      else if (c[currentIndex] === 1) energy -= 3;
    }
    currentIndex += k;
  }
  return energy;
}
// jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
// jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);

/**
 * Find Digits
 * https://www.hackerrank.com/challenges/find-digits/problem
 */
function findDigits(n: number): number {
  let count: number = 0;
  for (let v of n.toString().split('')) {
    let val: number = parseInt(v);
    if (n % val === 0) count++;
  }
  return count;
}
// findDigits(12);
// findDigits(1012);

/**
 * Append and Delete
 * https://www.hackerrank.com/challenges/append-and-delete/problem
 */
// type AppendAndDelete = 'Yes' | 'No';
// function appendAndDelete(s: string, t: string, k: number): AppendAndDelete {
//   console.log('s:', s);
//   console.log('t:', t);
//   console.log('k:', k);

//   let longestLength: number,
//     charDiffAt: number = 0,
//     sToAdd: number = 0,
//     sToDel: number = 0,
//     performMin: number = 0,
//     testCase: 0 | 1 | 2 = 0,
//     canPerform: AppendAndDelete = 'No';

//   s.length > t.length ? (longestLength = s.length) : (longestLength = t.length);
//   console.log('longestLength:', longestLength);
//   console.log('s.length:', s.length);
//   console.log('t.length:', t.length);

//   for (let i = 0; i < longestLength; i++) {
//     const sChar: string = s.charAt(i);
//     const tChar: string = t.charAt(i);
//     if (sChar !== tChar) {
//       charDiffAt = i;
//       sToDel = s.length - charDiffAt;
//       sToAdd = t.length - charDiffAt;
//       performMin = sToAdd + sToDel;
//       break;
//     }
//   }
//   console.log('chardiffat:', charDiffAt);
//   console.log('sToAdd:', sToAdd, 'sToDel:', sToDel);
//   console.log('performMin:', performMin);

//   /* CHECK CASE */
//   if (sToAdd === sToDel) {
//     console.log('equal');
//   } else if (sToAdd < sToDel) {
//     console.log('sTodel Bigger');
//   } else if (sToAdd > sToDel) {
//     console.log('sToAdd Bigger');
//     if(performMin != k){

//     }
//   }

//   console.log('\n');
// }
// console.log('output: YES');
// appendAndDelete('hackerhappy', 'hackerrank', 9);
// console.log('output: YES');
// appendAndDelete('aba', 'aba', 7);
// console.log('output: No');
// appendAndDelete('ashley', 'ash', 2);
// console.log('output: No');
// appendAndDelete('y', 'yu', 2);
// console.log('output: No');
// appendAndDelete('abcd', 'abcdert', 10);
// console.log('output: No');
// appendAndDelete('qwerasdf', 'qwerbsdf', 6);
// console.log('output: YES');
// appendAndDelete('zzzzz', 'zzzzzzz', 4);
// console.log('output: YES');
// appendAndDelete('aaa', 'a', 5);
// console.log('output: No');
// appendAndDelete(
//   'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv',
//   'bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv',
//   100
// );
// console.log('output: YES');
// appendAndDelete(
//   'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv',
//   'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv',
//   20
// );

/**
 * Sherlock and Squares
 * https://www.hackerrank.com/challenges/sherlock-and-squares/problem
 */
function squares(a: number, b: number): number {
  let count: number = 0,
    start: number = 1,
    max: number = 0;
  while (max < b) {
    max = start * start;
    if (max >= a && max <= b) count++;
    start++;
  }
  return count;
}
// squares(100, 1000);

/**
 * Library Fine
 * https://www.hackerrank.com/challenges/library-fine/problem
 */
function libraryFine(
  d1: number,
  m1: number,
  y1: number,
  d2: number,
  m2: number,
  y2: number
): number {
  let dateLate: number = d2 - d1,
    monthLate: number = m2 - m1,
    yearLate: number = y2 - y1,
    totalFine: number = 0;
  // console.log(dateLate, monthLate, yearLate);
  let checkDate: number = Math.sign(dateLate),
    checkMonth: number = Math.sign(monthLate),
    checkYear: number = Math.sign(yearLate);
  if (checkYear > 0) return totalFine;
  else if (checkYear < 0) return (totalFine = 10000);
  else if (checkMonth < 0) return (totalFine = 500 * Math.abs(monthLate));
  else if (checkMonth > 0) return totalFine;
  else if (checkDate < 0) return (totalFine = 15 * Math.abs(dateLate));
  else return totalFine;
}
// 0
// console.log(libraryFine(15, 7, 2014, 1, 7, 2015));
// 10000
// console.log(libraryFine(1, 1, 2015, 31, 12, 2014));
// 0
// console.log(libraryFine(28, 2, 2015, 15, 4, 2015));

/**
 * Cut the sticks
 *https://www.hackerrank.com/challenges/cut-the-sticks/problem
 */
function cutTheSticks(arr: number[]): number[] {
  let stack: number[] = arr;
  const beforeCut: number[] = [];
  beforeCut.push(arr.length);
  while (stack.length > 0) {
    let min: number = Math.min(...stack);
    for (let i in stack) {
      stack[i] = stack[i] - min;
    }
    // Clear Round
    stack = stack.filter((value) => value != 0);
    if (stack.length !== 0) beforeCut.push(stack.length);
  }
  return beforeCut;
}
// console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
// console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));

/**
 * Repeated String
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */
function repeatedString(s: string, n: number): number {
  console.time('time');
  let count: number = 0;
  let textLength: number = s.length;
  let indexOfA: number = s.indexOf('a');
  console.log(s);
  console.log('textLength:', textLength);
  console.log(indexOfA);

  console.timeEnd('time');
  return count;
}
console.log(repeatedString('aba', 10));
// console.log(
//   repeatedString(
//     'ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt',
//     685118368975
//   )
// );
// console.log(repeatedString('ovsgqavcrvd', 685118368975));
// console.log(repeatedString('a', 100000000));
// console.log(repeatedString('a', 1000000000000));
