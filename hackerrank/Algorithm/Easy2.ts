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
  let s: string = '';
  for (let i = p; i <= q; i++) {
    let numSquare: number = i * i;
    let numSqStr: string = numSquare.toString();
    let dividedFromEnd: number = Math.round(numSqStr.length / 2);
    let dividedFromStart: number = numSqStr.length - dividedFromEnd;
    let stringFromEnd: string = numSqStr.substr(-dividedFromEnd);
    let stringFromStart: string = numSqStr.substr(0, dividedFromStart);
    let sum: number = parseInt(stringFromStart) + parseInt(stringFromEnd);
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
// kaprekarNumbers(1,99999)

/**
 * Taum and B'day
 * https://www.hackerrank.com/challenges/taum-and-bday/problem
 * error : print BigInt problem
 */
function taumBday(
  b: number,
  w: number,
  bc: number,
  wc: number,
  z: number
): bigint | number {
  //   console.log('b:', b, 'w:', w, 'bc:', bc, 'wc:', wc, 'z:', z);
  let cost: bigint = BigInt(0);
  let defaultCase: bigint = BigInt(b * bc + w * wc);
  if (z > wc && z > bc) cost = defaultCase;
  else if (bc > wc)
    if (wc + z < bc) cost = BigInt(b * (wc + z) + w * wc);
    else cost = defaultCase;
  else if (wc > bc)
    if (bc + z < wc) cost = BigInt(w * (bc + z) + b * bc);
    else cost = defaultCase;
  else cost = defaultCase;
  //   console.log(cost);
  return cost;
}
// case 12
// taumBday(443463982, 833847400, 429734889, 628664883, 610875522); //714782523241122198
// taumBday(623669229, 435417504, 266946955, 600641444, 515391879);
// taumBday(763364819, 37220400, 711640763, 34378393, 655626808);
// taumBday(177742229, 51792729, 358392247, 642296973, 158448705);
// taumBday(402332409, 253667421, 384186676, 728988281, 883897044);
// taumBday(962555475, 753433321, 20275090, 23915540, 815412555);
// taumBday(853918694, 319895873, 649259954, 136169934, 948560755);
// taumBday(112651828, 759839162, 236494610, 379598782, 212996957);
// taumBday(751886489, 142963601, 250217357, 463527251, 29858345);
// taumBday(905844164, 493785831, 81651073, 116752762, 136082804);

/**
 * Minimum Distances
 * https://www.hackerrank.com/challenges/minimum-distances/problem
 */
interface minimumNumObj {
  [index: string]: number;
}
function minimumDistances(a: number[]): number {
  const check: minimumNumObj = {};
  const pair: number[] = [];
  let minimum: number = 0;
  // Count V.2
  for (let v of a) {
    check[v] ? (check[v] += 1) : (check[v] = 1);
    if (check[v] === 2) pair.push(v);
  }
  if (pair.length === 0) return -1;
  else
    for (let i of pair) {
      const duo: number[] = [];
      a.map((value, index) => value === i && duo.push(index));
      const diff: number = Math.abs(duo[0] - duo[1]);
      if (minimum) {
        if (diff < minimum) minimum = diff;
      } else minimum = diff;
    }
  return minimum;
}
// console.log(minimumDistances([3, 2, 1, 2, 3]));
// console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
// console.log(minimumDistances([1, 2, 3, 4, 10]));

/**
 * Halloween Sale
 * https://www.hackerrank.com/challenges/halloween-sale/problem
 */
function howManyGames(p: number, d: number, m: number, s: number): number {
  const totalAr: number[] = [];
  let totalNum: number = p;
  let next: number = 0;
  if (totalNum < s) totalAr.push(totalNum);
  else return 0;
  while (totalNum < s) {
    next = totalAr[totalAr.length - 1] - d;
    next > m ? (next = next) : (next = m);
    let totalValue: number = totalAr.reduce((a, b) => a + b);
    if (totalValue + next <= s) totalAr.push(next);
    totalNum += next;
  }
  return totalAr.length;
}

// howManyGames(20, 3, 6, 70);
// howManyGames(89, 60, 27, 7777);
// howManyGames(100, 1, 1, 99);

/**
 * Chocolate Feast
 * https://www.hackerrank.com/challenges/chocolate-feast/problem
 */
function chocolateFeast(n: number, c: number, m: number): number {
  let currentChoc: number = Math.floor(n / c);
  let totalChoc: number = currentChoc;
  let wrapperStack: number = currentChoc;
  while (currentChoc !== 0) {
    currentChoc = Math.floor(wrapperStack / m);
    wrapperStack = (wrapperStack % m) + currentChoc;
    totalChoc += currentChoc;
  }
  return totalChoc;
}
// chocolateFeast(15, 3, 2);
// chocolateFeast(10, 2, 5)
// chocolateFeast(12, 4, 4);
// chocolateFeast(6, 2, 2);
// chocolateFeast(7, 3, 2);

/**
 * Service Lane
 * https://www.hackerrank.com/challenges/service-lane/problem
 */
type width = Array<number>;
type cases = Array<[number, number]>;
function serviceLane(n: width, cases: cases) {
  const stack: any[] = [];
  for (let i = 0; i < cases.length; i++) {
    const startIndex: number = cases[i][0];
    const lastIndex: number = cases[i][1];
    let min: number = n[startIndex];
    for (let j = startIndex; j < lastIndex; j++) {
      if (n[j + 1] < min) min = n[j + 1];
    }
    stack.push(min);
  }
  return stack;
}
// Modifications to main(), since the original code didn't pass the correct arguments to solve the algorithm
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

//     const [n, t] = [...readLine().split(' ')].map(x => parseInt(x, 10))
//     const width = readLine().split(' ').map(x => parseInt(x, 10))
//     const cases = Array(t).fill(0).map(x => readLine().split(' ').map(y => parseInt(y, 10)))
//     let result = serviceLane(width, cases)

//     ws.write(result.join("\n") + "\n")
//     ws.end()
// }