"use strict";
function jumpingOnClouds2(c) {
    let cloud = [];
    for (let i = 0; i < c.length; i++) {
        if (c[i] !== 1)
            cloud.push(i);
    }
    let jump = [];
    jump.push(cloud[0]);
    for (let j = 0; j < cloud.length; j++) {
        let val = cloud[j], next = cloud.includes(val + 1), nextNext = cloud.includes(val + 2);
        if (val >= jump[jump.length - 1])
            if (next === true && nextNext === false)
                jump.push(val + 1);
            else if (next === false && nextNext === true)
                jump.push(val + 2);
            else if (next === true && nextNext === true)
                jump.push(val + 2);
    }
    console.log(jump);
    return jump.length - 1;
}
function equalizeArray(arr) {
    let arrFilter = arr.sort().filter((value, index, arr) => {
        return arr[index] !== arr[index + 1];
    });
    let objCount = {};
    for (let i = 0; i < arrFilter.length; i++) {
        objCount[arrFilter[i]] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        let num = objCount[arr[i]] + 1;
        objCount[arr[i]] = num;
    }
    const key = Object.keys(objCount);
    let max = 0;
    for (let i = 0; i < key.length; i++) {
        const index = parseInt(key[i]);
        if (objCount[index] > max)
            max = objCount[index];
    }
    const eq = arr.length - max;
    return eq;
}
function acmTeam(topic) {
    const pairStack = [];
    for (let i = 0; i < topic.length - 1; i++) {
        let currentTopic = topic[i];
        for (let j = i + 1; j < topic.length; j++) {
            let loopTopic = topic[j];
            let topicCount = 0;
            for (let k = 0; k < currentTopic.length; k++) {
                let a = parseInt(currentTopic[k]);
                let b = parseInt(loopTopic[k]);
                if (a + b > 0)
                    topicCount++;
            }
            pairStack.push(topicCount);
        }
    }
    const max = Math.max(...pairStack);
    let countMax = 0;
    for (let v of pairStack)
        if (v === max)
            countMax++;
    const count = [max, countMax];
    return count;
}
function kaprekarNumbers(p, q) {
    if (p < 0 || q < p || 100000 < q) {
        console.log('INVALID RANGE');
        return;
    }
    let s = '';
    for (let i = p; i <= q; i++) {
        let numSquare = i * i;
        let numSqStr = numSquare.toString();
        let dividedFromEnd = Math.round(numSqStr.length / 2);
        let dividedFromStart = numSqStr.length - dividedFromEnd;
        let stringFromEnd = numSqStr.substr(-dividedFromEnd);
        let stringFromStart = numSqStr.substr(0, dividedFromStart);
        let sum = parseInt(stringFromStart) + parseInt(stringFromEnd);
        if (i === 1)
            s = s + 1 + ' ';
        else if (sum === i)
            s = s + sum + ' ';
    }
    if (s)
        console.log(s);
    else
        console.log('INVALID RANGE');
}
function taumBday(b, w, bc, wc, z) {
    let cost = BigInt(0);
    let defaultCase = BigInt(b * bc + w * wc);
    if (z > wc && z > bc)
        cost = defaultCase;
    else if (bc > wc)
        if (wc + z < bc)
            cost = BigInt(b * (wc + z) + w * wc);
        else
            cost = defaultCase;
    else if (wc > bc)
        if (bc + z < wc)
            cost = BigInt(w * (bc + z) + b * bc);
        else
            cost = defaultCase;
    else
        cost = defaultCase;
    return cost;
}
function minimumDistances(a) {
    const check = {};
    const pair = [];
    let minimum = 0;
    for (let v of a) {
        check[v] ? (check[v] += 1) : (check[v] = 1);
        if (check[v] === 2)
            pair.push(v);
    }
    if (pair.length === 0)
        return -1;
    else
        for (let i of pair) {
            const duo = [];
            a.map((value, index) => value === i && duo.push(index));
            const diff = Math.abs(duo[0] - duo[1]);
            if (minimum) {
                if (diff < minimum)
                    minimum = diff;
            }
            else
                minimum = diff;
        }
    return minimum;
}
function howManyGames(p, d, m, s) {
    const totalAr = [];
    let totalNum = p;
    let next = 0;
    if (totalNum < s)
        totalAr.push(totalNum);
    else
        return 0;
    while (totalNum < s) {
        next = totalAr[totalAr.length - 1] - d;
        next > m ? (next = next) : (next = m);
        let totalValue = totalAr.reduce((a, b) => a + b);
        if (totalValue + next <= s)
            totalAr.push(next);
        totalNum += next;
    }
    return totalAr.length;
}
function chocolateFeast(n, c, m) {
    let currentChoc = Math.floor(n / c);
    let totalChoc = currentChoc;
    let wrapperStack = currentChoc;
    while (currentChoc !== 0) {
        currentChoc = Math.floor(wrapperStack / m);
        wrapperStack = (wrapperStack % m) + currentChoc;
        totalChoc += currentChoc;
    }
    return totalChoc;
}
function serviceLane(n, cases) {
    const stack = [];
    for (let i = 0; i < cases.length; i++) {
        const startIndex = cases[i][0];
        const lastIndex = cases[i][1];
        let min = n[startIndex];
        for (let j = startIndex; j < lastIndex; j++) {
            if (n[j + 1] < min)
                min = n[j + 1];
        }
        stack.push(min);
    }
    return stack;
}
function flatlandSpaceStations(n, c) {
    const freeCity = [];
    for (let i = 0; i < n; i++) {
        if (c.indexOf(i) === -1)
            freeCity.push(i);
    }
    if (freeCity.length === 0)
        return 0;
    const distance = [];
    for (let v of freeCity) {
        let minDistance = 0;
        for (let k of c) {
            let sum = Math.abs(v - k);
            if (!minDistance)
                minDistance = sum;
            else if (sum < minDistance)
                minDistance = sum;
        }
        distance.push(minDistance);
    }
    let max = Math.max(...distance);
    return max;
}
function workbook(n, k, arr) {
    const workbook = {};
    for (let i = 1; i <= n; i++) {
        if (!workbook[i])
            workbook[`Chapter${i}`] = {};
    }
    let currentIndex = 0;
    let chapterX = 1;
    for (let prob of arr) {
        let pMain = 0;
        let pRemain = 0;
        if (k >= prob)
            (pMain = 1), (pRemain = 0);
        else {
            pMain = Math.floor(prob / k);
            if (prob % k === 0)
                pRemain = 0;
            else
                pRemain = 1;
        }
        let newIndex = currentIndex + pMain + pRemain;
        if (workbook[`Chapter${chapterX}`]) {
            for (let i = currentIndex + 1; i <= newIndex; i++) {
                workbook[`Chapter${chapterX}`][i] = [];
            }
        }
        currentIndex = newIndex;
        chapterX++;
    }
    let specialProb = 0;
    for (let i = 0; i < arr.length; i++) {
        let start = 1;
        const end = arr[i];
        const wbChapter = workbook[`Chapter${i + 1}`];
        const keys = Object.keys(wbChapter);
        for (let i = start, keyIndex = 0; i <= end; i++) {
            wbChapter[keys[keyIndex]].push(i);
            if (i.toString() === keys[keyIndex])
                specialProb++;
            if (i % k === 0)
                keyIndex++;
        }
    }
    return specialProb;
}
function cavityMap(grid) {
    let gridC = grid;
    if (grid.length < 3 || grid[0].length + grid[1].length + grid[2].length < 9)
        return grid;
    const cellCount = {};
    for (let i = 1; i <= gridC.length - 2; i++) {
        let rowBefore = gridC[i - 1];
        let row = gridC[i];
        let rowAfter = gridC[i + 1];
        for (let j = 1; j <= row.length - 2; j++) {
            let cell = parseInt(row[j]);
            let cellR = parseInt(row[j + 1]);
            let cellL = parseInt(row[j - 1]);
            let cellT = parseInt(rowBefore[j]);
            let cellB = parseInt(rowAfter[j]);
            const cellArr = [cell, cellT, cellR, cellB, cellL];
            let countMax = 0;
            for (let k = 1; k < cellArr.length; k++) {
                if (cellArr[k] >= cell)
                    countMax++;
            }
            if (countMax === 0) {
                if (!cellCount[i]) {
                    cellCount[i] = [];
                    cellCount[i].push(j);
                }
                else
                    cellCount[i].push(j);
            }
        }
    }
    for (let i of Object.entries(cellCount)) {
        let rowStr = grid[parseInt(i[0])].split('');
        const posArr = i[1];
        for (let j = 0; j < posArr.length; j++) {
            rowStr[posArr[j]] = 'X';
        }
        rowStr = rowStr.join('');
        grid[parseInt(i[0])] = rowStr;
    }
    return grid;
}
function fairRations(B) {
    let inf = 0;
    let count = 0;
    while (true) {
        for (let i = 0; i < B.length; i++) {
            if (B[i] % 2 !== 0) {
                B[i] = B[i] + 1;
                B[i + 1] = B[i + 1] + 1;
                count += 2;
                break;
            }
        }
        let mod = 0;
        for (let i of B)
            if (i % 2 === 0)
                mod++;
        if (mod === B.length)
            break;
        inf++;
        if (inf > 2 * B.length) {
            count = 'NO';
            break;
        }
    }
    return count;
}
function happyLadybugs(b) {
    let str = b.split('');
    let strSort = str.sort();
    let status = 'YES';
    let space = 0;
    let almostSort = false;
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_')
            space++;
        if (!obj[str[i]] && str[i] !== '_')
            obj[str[i]] = 1;
        else if (str[i] !== '_')
            obj[str[i]]++;
    }
    if (space === 0 && strSort.join('').localeCompare(b) === -1) {
        status = 'YES';
        almostSort = true;
    }
    if (space === str.length)
        status = 'YES';
    for (let v of Object.entries(obj))
        if (v[1] < 2)
            return (status = 'NO');
    if (almostSort) {
        for (let j = 0; j < b.split('').length; j++) {
            let strArr = b.split('');
            if (j % 2 === 0 || j === 0) {
                if (strArr[j + 1] !== strArr[j]) {
                    console.log('case 4');
                    status = 'NO';
                }
            }
        }
    }
    return status;
}
function introTutorial(v, arr) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === v)
            index = i;
    }
    return index;
}
introTutorial(4, [1, 4, 5, 7, 9, 12]);
function superReducedString(s) {
    let str = s;
    let loop = true;
    let i = 0;
    let error = 0;
    while (loop) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            error++;
            if (i === 0)
                str = str.substring(2, str.length);
            else {
                let s1 = str.substring(0, i);
                let s2 = str.substring(i + 2, str.length);
                str = s1.concat(s2);
            }
        }
        else
            i++;
        if (!str) {
            str = 'Empty String';
            break;
        }
        if (i === str.length) {
            if (error === 0)
                loop = false;
            else
                (i = 0), (error = 0);
        }
    }
    return str;
}
function bigSorting(unsorted) {
    const arr = [];
    const returnArr = [];
    let arrBigInt = [];
    for (let i of unsorted) {
        let a = BigInt(i);
        if (a < Number.MAX_SAFE_INTEGER) {
            arr.push(parseInt(a));
        }
    }
    arr.sort((a, b) => a - b);
    for (let i of arr) {
        returnArr.push(i.toString());
    }
    arrBigInt = unsorted.filter((value) => BigInt(value) > Number.MAX_SAFE_INTEGER);
    let loopBigInt = true;
    let i = 0;
    let error = 0;
    while (loopBigInt) {
        if (arrBigInt.length === 1) {
            break;
        }
        let a = BigInt(arrBigInt[i]);
        let b = BigInt(arrBigInt[i + 1]);
        if (b < a) {
            error++;
            [arrBigInt[i], arrBigInt[i + 1]] = [arrBigInt[i + 1], arrBigInt[i]];
        }
        i++;
        if (i === arrBigInt.length - 1) {
            if (error === 0)
                break;
            else
                (i = 0), (error = 0);
        }
    }
    for (let i of arrBigInt) {
        returnArr.push(i);
    }
    return returnArr;
}
function camelcase(s) {
    let count = 0;
    for (let i of s) {
        if (i === i.toUpperCase())
            count++;
    }
    return count + 1;
}
function insertionSort2(n, arr) {
    for (let i = 1; i < arr.length; i++) {
        let minIndex = 0;
        for (let j = i - 1; j >= 0; j--) {
            let insertNum = arr[i];
            if (arr[i] > arr[j]) {
                minIndex = j;
                arr.splice(i, 1);
                arr.splice(minIndex + 1, 0, insertNum);
                break;
            }
            else if (j === 0) {
                if (arr[i] < arr[j]) {
                    arr.splice(i, 1);
                    arr.splice(0, 0, insertNum);
                    break;
                }
            }
        }
        let str = '';
        for (let i of arr) {
            str += i + ' ';
        }
        console.log(str);
    }
}
function insertionSort1(n, arr) {
    const rightMost = arr[arr.length - 1];
    let minIndex = 0;
    let atZero = false;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < rightMost) {
            minIndex = i;
            break;
        }
        else if (i === 0 && arr[i] > rightMost) {
            atZero = true;
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            arr[arr.length - 1] = arr[arr.length - 2];
            console.log(...arr);
        }
        else {
            if (i === minIndex + 1) {
                arr[i] = rightMost;
                if (atZero) {
                    for (let j = 2; j > 0; j--) {
                        if (j === 1) {
                            arr[0] = rightMost;
                            console.log(...arr);
                            break;
                        }
                        arr[i] = arr[i - 1];
                        console.log(...arr);
                    }
                    break;
                }
                console.log(...arr);
                break;
            }
            else {
                arr[i] = arr[i - 1];
                console.log(...arr);
            }
        }
    }
}
function quicksort(arr) {
    const pivot = [arr[0]];
    const left = [];
    const right = [];
    for (let i of arr) {
        if (i > arr[0])
            right.push(i);
        else if (i < arr[0])
            left.push(i);
    }
    return left.concat(pivot).concat(right);
}
function marsExplorations(s) {
    let sos = '';
    const times = s.length / 3;
    let error = 0;
    for (let i = 0; i < times; i++)
        sos += 'SOS';
    for (let i = 0; i <= s.length; i++) {
        if (s.charAt(i) !== sos.charAt(i))
            error++;
    }
    return error;
}
function pangrams(s) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const check = {};
    let pangram = 'pangram';
    for (let i of alphabets)
        if (!check[i])
            check[i] = 0;
    for (let i of s) {
        if (i !== ' ') {
            if (i === i.toLowerCase() || i === i.toUpperCase()) {
                i = i.toLowerCase();
                check[i] = check[i] + 1;
            }
        }
    }
    for (let v of Object.values(check))
        if (v === 0)
            pangram = 'not pangram';
    return pangram;
}
function hackerrankInString(s) {
    const main = 'hackerrank';
    const arr = [];
    let a = 0, b = 0;
    while (true) {
        if (b === s.length)
            break;
        if (s.charAt(b) === main.charAt(a)) {
            arr.push(s.charAt(b));
            a++;
        }
        b++;
    }
    if (arr.join('') === main)
        return 'YES';
    else
        return 'NO';
}
function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arr = alphabet.split('');
    let str = '';
    function findRotate(i, plus) {
        let newString = i + plus;
        if (newString > arr.length - 1) {
            newString = newString % arr.length;
            if (newString === -1) {
                if (i === 25)
                    return arr[24];
                else if (i === 0)
                    return arr[25];
            }
            return arr[newString];
        }
        else
            return arr[newString];
    }
    for (let i of s) {
        if (arr.includes(i.toLowerCase()) || arr.includes(i.toUpperCase())) {
            let text = i;
            let newText = findRotate(arr.indexOf(i.toLowerCase()), k);
            if (text === text.toUpperCase())
                newText = newText.toUpperCase();
            str += newText;
        }
        else
            str += i;
    }
    return str;
}
function minimumNumber(n, password) {
    const validate = {
        numbers: /[0-9]/,
        lower_case: /[a-z]/,
        upper_case: /[A-Z]/,
        special_characters: /[-!@#$%^&*()+]/,
    };
    const check = {
        numbers: 0,
        lower_case: 0,
        upper_case: 0,
        special_characters: 0,
    };
    for (let i of password) {
        if (validate.numbers.test(i))
            check.numbers++;
        else if (validate.lower_case.test(i))
            check.lower_case++;
        else if (validate.upper_case.test(i))
            check.upper_case++;
        else if (validate.special_characters.test(i))
            check.special_characters++;
    }
    let numToAdd = 0;
    if (check.numbers === 0)
        numToAdd++;
    if (check.lower_case === 0)
        numToAdd++;
    if (check.upper_case === 0)
        numToAdd++;
    if (check.special_characters === 0)
        numToAdd++;
    let newLength = numToAdd;
    if (newLength + n < 6)
        newLength += 6 - (newLength + n);
    return newLength;
}
function strangeCounter(t) {
    let col = 3;
    let time = 3;
    let r = 0;
    if (t <= 3)
        return (r = time - t + 1);
    while (t > time) {
        col *= 2;
        time += col;
        if (time > t) {
            if (time - t !== 0)
                r = time - t + 1;
        }
        else if (time === t)
            r = 1;
    }
    return r;
}
function weightdUniformStrings(s, queries) {
    const alphabet = ' abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.split('');
    const wString = [];
    const weight = [];
    const count = {};
    let i = 0;
    for (let i of s) {
        if (!count[i])
            count[i] = 1;
        else
            count[i]++;
    }
    console.log(count);
    for (let i of Object.entries(count)) {
        let sWeight = index.indexOf(i[0]);
        let strCount = i[1];
        let j = 1;
        while (j <= strCount) {
            let totalWeight = sWeight * j;
            weight.push(totalWeight);
            j++;
        }
    }
    for (let i of queries) {
        if (weight.indexOf(i) !== -1)
            wString.push('Yes');
        else
            wString.push('No');
    }
    return wString;
}
function funnyString(s) {
    let rString = s.split('').reverse().join('');
    let result = 'Not Funny';
    let asciiN = [];
    let asciiR = [];
    const sumN = [];
    const sumR = [];
    for (let i = 0; i < s.length; i++) {
        asciiN.push(s.charCodeAt(i));
        asciiR.push(rString.charCodeAt(i));
    }
    for (let j = 0; j <= asciiN.length - 2; j++) {
        sumN.push(Math.abs(asciiN[j] - asciiN[j + 1]));
        sumR.push(Math.abs(asciiR[j] - asciiR[j + 1]));
    }
    for (let k = 0; k < sumN.length; k++) {
        if (sumN[k] === sumR[k])
            result = 'Funny';
        else {
            result = 'Not Funny';
            break;
        }
    }
    return result;
}
