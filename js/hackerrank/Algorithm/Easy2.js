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
    const stack = [];
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
kaprekarNumbers(1, 99999);
