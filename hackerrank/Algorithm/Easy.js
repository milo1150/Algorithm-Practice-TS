"use strict";
const simpleArraySumAr = [1, 2, 3, 4, 10, 11];
function simpleArraySum(array) {
    let sum = 0;
    for (const value of array) {
        sum += value;
    }
    return sum;
}
const matrixArr1 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];
function diagonalDifference(arr) {
    let diff = 0, sumRight = 0, sumLeft = 0, IndexToRight = 0, indexToLeft = arr.length - 1;
    for (const value of arr) {
        sumRight += value[IndexToRight];
        IndexToRight++;
        sumLeft += value[indexToLeft];
        indexToLeft--;
    }
    diff = sumRight - sumLeft;
    return Math.abs(diff);
}
const plusMinusArr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    let zero = 0, positive = 0, negative = 0, arrLength = arr.length;
    for (const value of arr) {
        const status = Math.sign(value);
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
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        const space = n - i;
        const row = [];
        for (let j = 0; j < space; j++) {
            row.push(' ');
        }
        for (let k = 0; k < i; k++) {
            row.push('#');
        }
        console.log(row.join(''));
    }
}
const miniMaxSumArr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    const maxIndex = arr.findIndex((value) => value === Math.min(...arr));
    const maxValue = arr
        .filter((value, index) => index != maxIndex)
        .reduce((a, b) => a + b);
    const minIndex = arr.findIndex((value) => value === Math.max(...arr));
    const minValue = arr
        .filter((value, index) => index != minIndex)
        .reduce((a, b) => a + b);
    console.log(minValue, maxValue);
}
const candleStack = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
function birthdayCakeCandles(candles) {
    const tallest = Math.max(...candles);
    const howmanyTallest = candles.filter((value) => value === tallest)
        .length;
    return howmanyTallest;
}
const time1 = '12:40:22AM';
const time3 = '04:59:59AM';
const time4 = '12:45:54AM';
function timeConversion(s) {
    const time = s.slice(0, -2);
    const unit = s.slice(-2);
    let hour = time.slice(0, 2);
    const minsec = time.slice(2);
    if (unit === 'PM') {
        if (hour !== '12') {
            hour = parseInt(hour) + 12;
            if (hour === 24) {
                hour = '00';
            }
        }
    }
    else if (unit === 'AM') {
        if (hour === '12') {
            hour = '00';
        }
    }
    return hour.toString().concat(minsec);
}
const grade = [73, 67, 38, 88];
const grade2 = [37, 38];
function gradingStudents(grades) {
    const sumGrade = [];
    const step = [];
    for (let i = 40; i <= 100; i += 5) {
        step.push(i);
    }
    for (const score of grades) {
        for (const check of step) {
            if (check < 40) {
                sumGrade.push(check);
                break;
            }
            else if (score > check === false) {
                check - score < 3 ? sumGrade.push(check) : sumGrade.push(score);
                break;
            }
        }
    }
    return sumGrade;
}
gradingStudents(grade);
