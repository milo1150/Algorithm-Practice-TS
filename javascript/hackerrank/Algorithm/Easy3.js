"use strict";
function palindromeIndex(s) {
    let Forward = [];
    let Backward = [];
    let delIndex = -1;
    const diff = [];
    for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
        Forward.push(s.charCodeAt(i));
        Backward.push(s.charCodeAt(j));
    }
    for (let k = 0; k < s.length; k++) {
        if (Forward[k] !== Backward[k])
            diff.push(k);
    }
    if (diff.length === 0)
        return delIndex;
    let indexDel = diff[0];
    let s1 = s.slice(0, indexDel);
    let s2 = s.slice(indexDel + 1, s.length);
    let s3 = s1.concat(s2);
    let error = false;
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
    if (!error)
        delIndex = diff[0];
    else
        delIndex = diff[diff.length - 1];
    return delIndex;
}
function missingNumbers(arr, brr) {
    const objOne = {};
    const objTwo = {};
    const missNum = [];
    for (let i of arr) {
        if (!objOne[i])
            objOne[i] = 1;
        else
            objOne[i]++;
    }
    for (let i of brr) {
        if (!objTwo[i])
            objTwo[i] = 1;
        else
            objTwo[i]++;
    }
    for (let key of Object.keys(objTwo)) {
        const objOneValue = objOne[key];
        const objTwoValue = objTwo[key];
        if (objOneValue !== objTwoValue)
            missNum.push(parseInt(key));
    }
    return missNum;
}
function icecreamParlor(m, arr) {
    const check = [];
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
function twoStrings(s1, s2) {
    let status = 'NO';
    for (let i of s2) {
        if (s1.includes(i)) {
            status = 'YES';
            break;
        }
    }
    return status;
}
function stringConstruction(s) {
    const count = {};
    let cost = 0;
    for (let i of s) {
        if (!count[i]) {
            count[i] = 1;
            cost++;
        }
    }
    return cost;
}
function balancedSums(arr) {
    let status = 'NO';
    let left = 0;
    let right = arr.reduce((acc, val) => acc + val);
    for (let i = 0; i < arr.length; i++) {
        const curVal = arr[i];
        if (i !== 0)
            left += arr[i - 1];
        right -= curVal;
        if (left === right) {
            status = 'YES';
            break;
        }
    }
    return status;
}
function minimumAbsoluteDifference(arr) {
    const sortArr = arr.sort((a, b) => a - b);
    let min = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let diff = Math.abs(sortArr[i] - sortArr[j]);
            if (!min)
                min = diff;
            else if (diff === 0) {
                min = diff;
                break;
            }
            else if (diff > min)
                break;
            else if (diff < min)
                min = diff;
        }
        if (min === 0)
            break;
    }
    return min;
}
function luckBalance(k, contests) {
    let luck = [];
    let luck2 = 0;
    for (let i = 0; i < contests.length; i++) {
        if (contests[i][1] === 1)
            luck.push(contests[i][0]);
        else if (contests[i][1] === 0)
            luck2 += contests[i][0];
    }
    luck.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < luck.length; i++) {
        if (i < k)
            sum += luck[i];
        else
            sum -= luck[i];
    }
    return sum + luck2;
}
function gridChallenge(grid) {
    let status = 'YES';
    const gridSort = [];
    for (let i = 0; i < grid.length; i++) {
        let strSort = grid[i].split('').sort().join('');
        gridSort.push(strSort);
    }
    const strLength = gridSort[0].length;
    const gridSortLength = gridSort.length;
    for (let i = 0; i < strLength; i++) {
        for (let j = 0; j < gridSortLength - 1; j++) {
            const currentChar = gridSort[j];
            const nextChar = gridSort[j + 1];
            if (nextChar.charCodeAt(i) < currentChar.charCodeAt(i)) {
                status = 'NO';
                break;
            }
        }
        if (status === 'NO')
            break;
    }
    return status;
}
