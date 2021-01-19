/* SIMPLE ARRAY SUM */
const simpleArraySumAr: number[] = [1, 2, 3, 4, 10, 11];
function simpleArraySum(array: number[]): number {
  let sum: number = 0;
  for (const value of array) {
    sum += value;
  }
  return sum;
}
// console.log(simpleArraySum(simpleArraySumAr));

/* DIAGONAL DIFFERENCE */
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

/* PLUS MINUS */
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

/* STAIRCASE */
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

/* Mini-Max Sum */
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

/* BIRTHDAY CAKE CANDLE */
// const candleStack: number[] = [3, 2, 1, 3];
const candleStack: number[] = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles(candles: number[]): number {
  const tallest: number = Math.max(...candles);
  const howmanyTallest: number = candles.filter((value) => value === tallest)
    .length;
  return howmanyTallest;
}
// console.log(birthdayCakeCandles(candleStack));

/* Time Converison */
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

/* Grading Student */
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
gradingStudents(grade);
