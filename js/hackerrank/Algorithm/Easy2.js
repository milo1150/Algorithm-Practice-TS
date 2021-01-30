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
    console.table(grid);
    console.log(typeof grid);
    let gridCopy = grid.toString();
    console.log(typeof gridCopy);
    if (grid.length < 3 || grid[0].length + grid[1].length + grid[2].length < 9)
        return grid;
    console.log('----------------- grid pass --------------------');
    for (let i = 1; i <= gridCopy.length - 2; i++) {
        let rowBefore = gridCopy[i - 1];
        let row = gridCopy[i];
        let rowAfter = gridCopy[i + 1];
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
            console.log(row);
            console.log(cellArr);
            if (countMax === 0) {
                let newRow = row.split('');
                newRow[j] = 'X';
                newRow = newRow.join('');
            }
            console.log('updategrid:', gridCopy);
        }
    }
    return grid;
}
cavityMap([
    '2476387',
    '1485738',
    '6591334',
    '9589583',
    '6827769',
    '2559498',
    '1822388',
]);