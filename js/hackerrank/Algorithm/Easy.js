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
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let newApples = [], newOranges = [];
    apples.forEach((v) => newApples.push(v + a));
    oranges.forEach((v) => newOranges.push(v + b));
    newApples = newApples.filter((v) => v >= s && v <= t);
    newOranges = newOranges.filter((v) => v >= s && v <= t);
    console.log(newApples.length);
    console.log(newOranges.length);
}
function kangaroo(x1, v1, x2, v2) {
    const OK = 'YES', NO = 'NO';
    if (x1 === x2 && v1 === v2) {
        return OK;
    }
    else if (x1 === x2 && v1 !== v2) {
        return NO;
    }
    let longestStart;
    x1 > x2 ? (longestStart = 'x1') : (longestStart = 'x2');
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
    let posKangaroo1 = x1, posKangaroo2 = x2;
    for (let i = 0; i < 10000; i++) {
        posKangaroo1 += v1;
        posKangaroo2 += v2;
        if (posKangaroo1 === posKangaroo2) {
            return OK;
        }
    }
    return NO;
}
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function breakingRecords(scores) {
    let highest = scores[0], lowest = scores[0], highestCount = 0, lowestCount = 0;
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
    const sum = [highestCount, lowestCount];
    return sum;
}
function divisibleSumPairs(n, k, ar) {
    let pairs = 0;
    for (let i = 0; i < n; i++) {
        let newarr = ar.filter((value, index) => index > i);
        for (const value of newarr) {
            if ((ar[i] + value) % k === 0) {
                pairs++;
            }
        }
    }
    return pairs;
}
function migratoryBirds(arr) {
    let stack = {};
    for (const value of arr) {
        stack[value] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        stack[arr[i]]++;
    }
    let stackAr = Object.entries(stack);
    let pos = 0;
    for (let j = 0; j < stackAr.length; j++) {
        if (j !== stackAr.length - 1) {
            if (stackAr[j][1] < stackAr[j + 1][1]) {
                pos = j + 1;
            }
        }
    }
    let sum = stackAr[pos][0];
    return sum;
}
function sockMerchant(n, ar) {
    let matching = 0;
    const check = {};
    let obj;
    for (const key of ar) {
        check[key] = 0;
    }
    for (const val of ar) {
        check[val]++;
    }
    obj = Object.entries(check);
    obj.map((el) => {
        matching += Math.floor(el[1] / 2);
    });
    return matching;
}
function bonAppetit(bill, k, b) {
    let totalBill;
    let arr = bill.filter((value, index) => index != k);
    totalBill = arr.reduce((a, b) => a + b);
    totalBill = b - totalBill / 2;
    totalBill <= 0 ? console.log('Bon Appetit') : console.log(totalBill);
}
function pageCount(n, p) {
    let count = 0, openToRight = 0, openToLeft = 0;
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    for (let i = 0, j = 0; j <= arr.length; j += 2, i++) {
        if (j === p || j + 1 === p) {
            openToRight = i;
            break;
        }
    }
    let startFromRight = arr.length;
    arr.length % 2 !== 0 ? (startFromRight = arr.length - 1) : null;
    for (let i = 0, j = startFromRight; j > 0; j -= 2, i++) {
        if (j === p || j + 1 === p) {
            openToLeft = i;
            break;
        }
    }
    openToRight > openToLeft ? (count = openToLeft) : (count = openToRight);
    return count;
}
function countingValleys(steps, path) {
    let valley = 0, checkzero = 0, currentStatus = 'sea';
    for (const v of path) {
        const check = [];
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
    return checkzero;
}
function getMoneySpent(keyboards, drives, b) {
    let BestDiffVal = b, BestDiffPos = 0, BestVal = 0;
    const stack = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i] + drives[j];
            stack.push(sum);
        }
    }
    for (let i = 0; i < stack.length; i++) {
        let diff = b - stack[i];
        if (diff <= BestDiffVal && diff >= 0) {
            BestDiffVal = diff;
            BestDiffPos = i;
        }
    }
    b === BestDiffVal ? (BestVal = -1) : (BestVal = stack[BestDiffPos]);
    return BestVal;
}
function catAndMouse(x, y, z) {
    let range = '';
    let catArange = Math.abs(x - z);
    let catBrange = Math.abs(y - z);
    if (catArange < catBrange) {
        range = 'Cat A';
    }
    else if (catBrange < catArange) {
        range = 'Cat B';
    }
    else if (catArange === catBrange) {
        range = 'Mouse C';
    }
    return range;
}
function pickingNumbers(a) {
    const header = a.sort().filter((value, index, arr) => {
        return arr[index] !== arr[index + 1];
    });
    let stack = [];
    for (let i = 0; i < header.length; i++) {
        const subStack = [];
        for (let j = 0; j < a.length; j++) {
            let sum = header[i] - a[j];
            if (sum === 0 || sum === -1)
                subStack.push(a[j]);
        }
        stack.push(subStack);
    }
    let final = stack[0].length;
    for (let i = 0; i < stack.length - 1; i++) {
        if (stack[i + 1].length > final) {
            final = stack[i + 1].length;
        }
    }
    return final;
}
function hurdleRace(k, height) {
    let potion = 0;
    for (const v of height) {
        let diff = k - v;
        diff < potion ? (potion = diff) : null;
    }
    return Math.abs(potion);
}
function designerOdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const stack = [];
    let max = 0;
    for (let w of word) {
        let pos = alphabet.indexOf(w);
        stack.push(h[pos]);
    }
    for (let v of stack)
        if (v > max)
            max = v;
    return max * stack.length;
}
