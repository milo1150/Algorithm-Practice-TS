/**
 * Jumping on the Clouds
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem
 */
function jumpingOnClouds2(c: number[]): number {
  let cloud: number[] = [];
  for (let i = 0; i < c.length; i++) {
    if (c[i] !== 1) cloud.push(i);
  }
  let jump: number[] = [];
  jump.push(cloud[0]);
  for (let j = 0; j < cloud.length; j++) {
    let val: number = cloud[j],
      next: boolean = cloud.includes(val + 1),
      nextNext: boolean = cloud.includes(val + 2);
    if (val >= jump[jump.length - 1])
      if (next === true && nextNext === false) jump.push(val + 1);
      else if (next === false && nextNext === true) jump.push(val + 2);
      else if (next === true && nextNext === true) jump.push(val + 2);
  }
  console.log(jump);
  return jump.length - 1;
}
// jumpingOnClouds2([0, 1, 0, 0, 0, 1, 0]);
// jumpingOnClouds2([0, 0, 1, 0, 0, 1, 0]);
// jumpingOnClouds2([0, 0, 0, 0, 0, 1, 0]);

/**
 * Equalize the Array
 * https://www.hackerrank.com/challenges/equality-in-a-array/problem
 * get array of most duplicate number
 */
interface eqArray {
  [key: string]: number;
}
function equalizeArray(arr: number[]): number {
  //   console.log('arr.length', arr.length);
  /* sort and reduce */
  let arrFilter: number[] = arr.sort().filter((value, index, arr) => {
    return arr[index] !== arr[index + 1];
  });
  //   console.log(arrFilter);
  /*   Create check point */
  let objCount: eqArray = {};
  for (let i = 0; i < arrFilter.length; i++) {
    objCount[arrFilter[i]] = 0;
  }
  //   console.log(objCount);
  /* Count */
  for (let i = 0; i < arr.length; i++) {
    let num: number = objCount[arr[i]] + 1;
    objCount[arr[i]] = num;
  }
  //   console.log(objCount);
  /*  Find max */
  const key: string[] = Object.keys(objCount);
  let max: number = 0;
  //   console.log('key:', key);
  for (let i = 0; i < key.length; i++) {
    const index: number = parseInt(key[i]);
    if (objCount[index] > max) max = objCount[index];
  }
  const eq: number = arr.length - max;
  return eq;
}

// equalizeArray([1, 2, 2, 3]);
// equalizeArray([3, 3, 2, 1, 3]);

/**
 * ACM ICPC Team
 * https://www.hackerrank.com/challenges/acm-icpc-team/problem
 * error when [500 x 500]
 */
type acm = [number, number];
interface acmObj {
  [index: string]: number;
}
function acmTeam(topic: string[]): acm {
  /* Calculate pair programming */
  // console.log(topic);
  const pairStack: number[] = [];
  for (let i = 0; i < topic.length - 1; i++) {
    let currentTopic: string = topic[i];
    // console.log('curentTopic:', currentTopic);
    for (let j = i + 1; j < topic.length; j++) {
      let loopTopic: string = topic[j];
      //   console.log(loopTopic);
      // Calculate
      let topicCount: number = 0;
      for (let k = 0; k < currentTopic.length; k++) {
        let a: number = parseInt(currentTopic[k]);
        let b: number = parseInt(loopTopic[k]);
        if (a + b > 0) topicCount++;
      }
      //   console.log(topicCount);
      pairStack.push(topicCount);
    }
  }
  //   console.log(pairStack);
  /* Find max duplicate */
  const max: number = Math.max(...pairStack);
  let countMax: number = 0;
  for (let v of pairStack) if (v === max) countMax++;
  const count: acm = [max, countMax];
  return count;
}
// acmTeam(['10101', '11110', '00010']);
// acmTeam(['10101', '11100', '11010', '00101']);
// acmTeam(['11101', '10101', '11001', '10111', '10000', '01110']);

/**
 * Modified Kaprekar Numbers
 * https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */
function kaprekarNumbers(p: number, q: number): void {
  if (p < 0 || q < p || 100000 < q) {
    console.log('INVALID RANGE');
    return;
  }
  const stack: number[] = [];
  let s: string = '';
  for (let i = p; i <= q; i++) {
    // console.log('i:', i);
    let numSquare: number = i * i;
    // console.log('numsquare:', numSquare);
    let numSqStr: string = numSquare.toString();
    let dividedFromEnd: number = Math.round(numSqStr.length / 2);
    let dividedFromStart: number = numSqStr.length - dividedFromEnd;
    let stringFromEnd: string = numSqStr.substr(-dividedFromEnd);
    let stringFromStart: string = numSqStr.substr(0, dividedFromStart);
    // console.log(dividedFromStart, dividedFromEnd);
    // console.log(stringFromStart, stringFromEnd);
    // console.log('startStringcheck:', parseInt(stringFromStart));
    let sum: number = parseInt(stringFromStart) + parseInt(stringFromEnd);
    // console.log('sum:', sum);
    if (i === 1) s = s + 1 + ' ';
    else if (sum === i) s = s + sum + ' ';
  }
  if (s) console.log(s);
  else console.log('INVALID RANGE');
  //   console.log(s);
}
// kaprekarNumbers(1, 100);
// kaprekarNumbers(100, 300);
// kaprekarNumbers(400, 700);
kaprekarNumbers(1,99999)
