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
function marcsCakewalk(calorie) {
    let arr = calorie.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * Math.pow(2, i);
    }
    return sum;
}
function toys(w) {
    const arr = w.sort((a, b) => a - b);
    let i = 0;
    let start = arr[0];
    let arrP = [];
    const stack = [];
    while (i < w.length) {
        if (arr[i] <= start + 4) {
            arrP.push(arr[i]);
        }
        else {
            stack.push(arrP);
            arrP = [];
            arrP.push(arr[i]);
            start = arr[i];
        }
        i++;
    }
    stack.push(arrP);
    return stack.length;
}
function maximumToys(prices, k) {
    let count = 0;
    let start = 0;
    const arr = prices.sort((a, b) => a - b);
    for (let i of arr) {
        start += i;
        if (start < k)
            count++;
        else
            break;
    }
    return count;
}
function jimOrders(orders) {
    const sum = [];
    const obj = {};
    for (let i = 0; i < orders.length; i++) {
        if (!obj[i + 1])
            obj[i + 1] = orders[i][0] + orders[i][1];
    }
    let arr = Object.entries(obj);
    arr = arr.sort(([, a], [, b]) => a - b);
    for (let j = 0; j < arr.length; j++) {
        sum.push(parseInt(arr[j][0]));
    }
    return sum;
}
function twoArrays(k, A, B) {
    let status = 'YES';
    const a = A.sort((a, b) => a - b);
    const b = B.sort((a, b) => b - a);
    for (let i = 0; i < A.length; i++) {
        if (a[i] + b[i] < k) {
            status = 'NO';
            break;
        }
    }
    return status;
}
function lonelyinteger(a) {
    const obj = {};
    let lonely = 0;
    for (let i of a) {
        if (!obj[i])
            obj[i] = 1;
        else
            obj[i]++;
    }
    for (let v of Object.entries(obj)) {
        if (v[1] === 1) {
            lonely = parseInt(v[0]);
            break;
        }
    }
    return lonely;
}
function testzingXor(l, r) {
    let max = 0;
    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) {
            let numA = i.toString(2);
            let numB = j.toString(2);
            let sum = [];
            for (let i = numB.length - 1, k = numA.length - 1; i >= 0; i--, k--) {
                if (numA.charAt(k)) {
                    if (numA.charAt(k) === '0' && numB.charAt(i) === '0')
                        sum.unshift('0');
                    else if (numA.charAt(k) === '1' && numB.charAt(i) === '1')
                        sum.unshift('0');
                    else if (numA.charAt(k) === '0' && numB.charAt(i) === '1')
                        sum.unshift('1');
                    else if (numA.charAt(k) === '1' && numB.charAt(i) === '0')
                        sum.unshift('1');
                }
                else {
                    sum.unshift(numB.charAt(i));
                }
            }
            let num = parseInt(sum.join(''), 2);
            if (num > max)
                max = num;
        }
    }
    return max;
}
function flippingBits(N) {
    let str = '';
    const BinaryNumber = N.toString(2);
    const length = N.toString(2).length;
    for (let i = 0; i < 32 - length; i++)
        str += '1';
    for (let j = 0; j < BinaryNumber.length; j++) {
        if (BinaryNumber.charAt(j) === '0')
            str += '1';
        else if (BinaryNumber.charAt(j) === '1')
            str += '0';
    }
    return parseInt(str, 2);
}
function sumXor(n) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        const sum = n + i;
        let nBinary = n.toString(2);
        let iBinary = i.toString(2);
        let arr = [];
        for (let j = nBinary.length - 1, k = iBinary.length - 1; j >= 0; j--, k--) {
            if (nBinary.charAt(j) === iBinary.charAt(k))
                arr.unshift('0');
            else if (iBinary.charAt(k) === '')
                break;
            else if (nBinary.charAt(j) !== iBinary.charAt(k))
                arr.unshift('1');
        }
        let sumBinary = nBinary.slice(0, nBinary.length - arr.length) + arr.join('');
        if (sum === parseInt(sumBinary, 2))
            count++;
    }
    return count;
}
