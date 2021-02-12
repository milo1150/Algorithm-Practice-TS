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

/**
 * Flatland Space Stations
 * https://www.hackerrank.com/challenges/flatland-space-stations/problem
 */
function flatlandSpaceStations(n: number, c: number[]): number {
  const freeCity: number[] = [];
  for (let i = 0; i < n; i++) {
    if (c.indexOf(i) === -1) freeCity.push(i);
  }
  if (freeCity.length === 0) return 0;
  const distance: number[] = [];
  for (let v of freeCity) {
    let minDistance: number = 0;
    for (let k of c) {
      let sum: number = Math.abs(v - k);
      if (!minDistance) minDistance = sum;
      else if (sum < minDistance) minDistance = sum;
    }
    distance.push(minDistance);
  }
  let max: number = Math.max(...distance);
  return max;
}
// flatlandSpaceStations(5, [0, 4]);

/**
 * Lisa's Workbook
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 * V.1 : maybe for front end data.so can use in algorithm but it very very very slow.
 * V.2 : for algorithm but it incomplete. 6/11 test case failed :(
 */
interface workbook {
  [index: string]: {
    [index: number]: number[];
  };
}
interface wbChapter {
  [index: string]: number[];
}
function workbook(n: number, k: number, arr: number[]): number {
  const workbook: workbook = {};
  // set workbook chapter
  for (let i = 1; i <= n; i++) {
    if (!workbook[i]) workbook[`Chapter${i}`] = {};
  }
  // console.log(workbook);
  /*   set index */
  let currentIndex: number = 0;
  let chapterX: number = 1;
  for (let prob of arr) {
    let pMain: number = 0;
    let pRemain: number = 0;
    if (k >= prob) (pMain = 1), (pRemain = 0);
    else {
      pMain = Math.floor(prob / k);
      if (prob % k === 0) pRemain = 0;
      else pRemain = 1;
    }
    let newIndex: number = currentIndex + pMain + pRemain;
    // console.log('lastIndex:', currentIndex);
    if (workbook[`Chapter${chapterX}`]) {
      for (let i = currentIndex + 1; i <= newIndex; i++) {
        workbook[`Chapter${chapterX}`][i] = [];
      }
    }
    currentIndex = newIndex;
    chapterX++;
  }
  // console.log(workbook);
  /*   put value and check */
  let specialProb: number = 0;
  for (let i = 0; i < arr.length; i++) {
    let start: number = 1;
    const end: number = arr[i];
    const wbChapter: wbChapter = workbook[`Chapter${i + 1}`];
    const keys: string[] = Object.keys(wbChapter);
    for (let i = start, keyIndex = 0; i <= end; i++) {
      wbChapter[keys[keyIndex]].push(i);
      if (i.toString() === keys[keyIndex]) specialProb++;
      if (i % k === 0) keyIndex++;
    }
  }
  // console.log(workbook);
  return specialProb;

  /**
   * V.2 6/11 test case failed
   */
  // let page: number = 1;
  // let special: number = 0;
  // for (let i = 1; i <= n; i++) {
  //   let last: number = 0;
  //   for (let j = 1; j <= arr[i - 1]; j++) {
  //     if (j % k === 0) {
  //       page++;
  //     }
  //     if (j === page - 1) special++; // OR
  //     if (j === page) special++;
  //     last = j;
  //   }
  //   if (last % k !== 0) page++;
  // }
  // // console.log(special);
  // return special;
}
// workbook(5, 3, [4, 2, 6, 1, 10]);
// workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]);
// workbook(1, 1, [100]);

/**
 * Cavity Map
 * https://www.hackerrank.com/challenges/cavity-map/problem
 * can't copy grid to edit and paste. need to change all x in one row in same time
 */
type cell = string | number;
type row = string | string[];
interface cellCount {
  [index: string]: number[];
}
function cavityMap(grid: string[]): string[] {
  let gridC = grid;
  if (grid.length < 3 || grid[0].length + grid[1].length + grid[2].length < 9)
    return grid;
  const cellCount: cellCount = {};
  for (let i = 1; i <= gridC.length - 2; i++) {
    let rowBefore: row = gridC[i - 1];
    let row: row = gridC[i];
    let rowAfter: row = gridC[i + 1];
    for (let j = 1; j <= row.length - 2; j++) {
      let cell: cell = parseInt(row[j]);
      let cellR: cell = parseInt(row[j + 1]);
      let cellL: cell = parseInt(row[j - 1]);
      let cellT: cell = parseInt(rowBefore[j]);
      let cellB: cell = parseInt(rowAfter[j]);
      const cellArr: cell[] = [cell, cellT, cellR, cellB, cellL];
      let countMax: number = 0;
      for (let k = 1; k < cellArr.length; k++) {
        if (cellArr[k] >= cell) countMax++;
      }
      if (countMax === 0) {
        if (!cellCount[i]) {
          cellCount[i] = [];
          cellCount[i].push(j);
        } else cellCount[i].push(j);
      }
    }
  }
  for (let i of Object.entries(cellCount)) {
    let rowStr: row = grid[parseInt(i[0])].split('');
    const posArr: number[] = i[1];
    for (let j = 0; j < posArr.length; j++) {
      rowStr[posArr[j]] = 'X';
    }
    rowStr = rowStr.join('');
    grid[parseInt(i[0])] = rowStr;
  }
  return grid;
}
// cavityMap(['1112', '1912', '1892', '1234']);
// cavityMap([
//   '2476387',
//   '1485738',
//   '6591334',
//   '9589583',
//   '6827769',
//   '2559498',
//   '1822388',
// ]);

/**
 * Fair Rations
 * https://www.hackerrank.com/challenges/fair-rations/problem
 */
function fairRations(B: number[]): number | string {
  let inf: number = 0;
  let count: number | string = 0;
  while (true) {
    for (let i = 0; i < B.length; i++) {
      if (B[i] % 2 !== 0) {
        B[i] = B[i] + 1;
        B[i + 1] = B[i + 1] + 1;
        count += 2;
        break;
      }
    }
    let mod: number = 0;
    for (let i of B) if (i % 2 === 0) mod++;
    if (mod === B.length) break;
    inf++;
    if (inf > 2 * B.length) {
      count = 'NO';
      break;
    }
  }
  return count;
}
// fairRations([2, 3, 4, 5, 6]);
// fairRations([4, 5, 6, 7]);
// fairRations([1, 2]);

/**
 * Happy Ladybugs
 * https://www.hackerrank.com/challenges/happy-ladybugs/problem
 * Broken algorithm 1/12 test cases failed
 */
type ladybugs = 'YES' | 'NO';
interface ladybugsObj {
  [index: string]: number;
}
function happyLadybugs(b: string): any {
  let str: string | string[] = b.split('');
  let strSort: string | string[] = str.sort();
  let status: ladybugs = 'YES';
  let space: number = 0;
  let almostSort: boolean = false;
  const obj: ladybugsObj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '_') space++;
    if (!obj[str[i]] && str[i] !== '_') obj[str[i]] = 1;
    else if (str[i] !== '_') obj[str[i]]++;
  }
  if (space === 0 && strSort.join('').localeCompare(b) === -1) {
    status = 'YES';
    almostSort = true;
  }
  if (space === str.length) status = 'YES';
  for (let v of Object.entries(obj)) if (v[1] < 2) return (status = 'NO');
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
// happyLadybugs('G');
// happyLadybugs('GR');
// happyLadybugs('_GR_');
// happyLadybugs('_R_G_');
// happyLadybugs('R_R_R');
// happyLadybugs('RRGGBBXX'); //YES
// happyLadybugs('RRGGBBXY'); //NO
// happyLadybugs('IIIAA'); //YES

/**
 * Intro to Tutorial Challenges
 * https://www.hackerrank.com/challenges/tutorial-intro/problem
 * Broken question
 */
function introTutorial(v: number, arr: number[]): number {
  let index: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) index = i;
  }
  return index;
}
introTutorial(4, [1, 4, 5, 7, 9, 12]);

/**
 * Super Reduce String
 * https://www.hackerrank.com/challenges/reduced-string/problem
 * do not sort string before check
 */
function superReducedString(s: string): string {
  let str: string = s;
  let loop: boolean = true;
  let i: number = 0;
  let error: number = 0;
  while (loop) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      error++;
      if (i === 0) str = str.substring(2, str.length);
      else {
        let s1: string = str.substring(0, i);
        let s2: string = str.substring(i + 2, str.length);
        str = s1.concat(s2);
      }
    } else i++;
    if (!str) {
      str = 'Empty String';
      break;
    }
    if (i === str.length) {
      if (error === 0) loop = false;
      else (i = 0), (error = 0);
    }
  }
  // console.log(str);
  // console.log('\n');
  return str;
}
// superReducedString('aaabccddd');
// superReducedString('baab');
// superReducedString(
//   'zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh'
// );
// superReducedString(
//   'lrfkqyuqfjjfquyqkfrlkxyqvnrtyssytrnvqyxkfrzrmzlygffgylzmrzrfveulqfpdbhhbdpfqluevlqdqrrcrwddwrcrrqdql'
// );

/**
 * Big Sorting
 * https://www.hackerrank.com/challenges/big-sorting/problem
 * Terminated due to timeout :( + 1 errors
 */
function bigSorting(unsorted: string[]): string[] {
  // console.log(unsorted);
  const arr: number[] = [];
  const returnArr: string[] = [];
  let arrBigInt: string[] = [];
  for (let i of unsorted) {
    let a: any = BigInt(i);
    if (a < Number.MAX_SAFE_INTEGER) {
      arr.push(parseInt(a));
    }
  }
  arr.sort((a, b) => a - b);
  // console.log(arr);
  for (let i of arr) {
    returnArr.push(i.toString());
  }
  // console.log(returnArr);

  /* BIG INT */
  arrBigInt = unsorted.filter(
    (value) => BigInt(value) > Number.MAX_SAFE_INTEGER
  );
  // console.log(arrBigInt);
  let loopBigInt: boolean = true;
  let i: number = 0;
  let error: number = 0;
  while (loopBigInt) {
    if (arrBigInt.length === 1) {
      break;
    }
    let a: any = BigInt(arrBigInt[i]);
    let b: any = BigInt(arrBigInt[i + 1]);
    if (b < a) {
      error++;
      [arrBigInt[i], arrBigInt[i + 1]] = [arrBigInt[i + 1], arrBigInt[i]];
    }
    i++;
    if (i === arrBigInt.length - 1) {
      if (error === 0) break;
      else (i = 0), (error = 0);
    }
  }
  // console.log(arrBigInt);
  for (let i of arrBigInt) {
    returnArr.push(i);
  }
  // console.log(returnArr);
  return returnArr;
}
// bigSorting([
//   '991415926535897932384626433832795',
//   '21415926535897932384626433832795',
//   '31415926535897932384626433832795',
//   '11415926535897932384626433832795',
//   '500',
//   '151213513',
//   '1',
//   '3',
//   '10',
//   '3',
//   '5',
// ]);

/**
 * CamelCase
 * https://www.hackerrank.com/challenges/camelcase/problem
 */
function camelcase(s: string): number {
  let count: number = 0;
  for (let i of s) {
    if (i === i.toUpperCase()) count++;
  }
  return count + 1;
}
// camelcase('saveChangesInTheEditor');

/**
 * Insertion Sort Part 2
 * https://www.hackerrank.com/challenges/insertionsort2/problem
 */
function insertionSort2(n: number, arr: number[]): void {
  for (let i = 1; i < arr.length; i++) {
    let minIndex: number = 0;
    for (let j = i - 1; j >= 0; j--) {
      let insertNum: number = arr[i];
      if (arr[i] > arr[j]) {
        minIndex = j;
        arr.splice(i, 1);
        arr.splice(minIndex + 1, 0, insertNum);
        break;
      } else if (j === 0) {
        if (arr[i] < arr[j]) {
          arr.splice(i, 1);
          arr.splice(0, 0, insertNum);
          break;
        }
      }
    }
    let str: string = '';
    for (let i of arr) {
      str += i + ' ';
    }
    console.log(str);
  }
}
// insertionSort2(6, [1, 4, 3, 5, 6, 2]);
// insertionSort2(7, [3, 4, 7, 5, 6, 2, 1]);
// insertionSort2(6, [2, 4, 6, 7, 3, 8]);

/**
 * Insertion Sort Part 1
 * https://www.hackerrank.com/challenges/insertionsort1/problem
 * unreadable....
 */
function insertionSort1(n: number, arr: number[]): void {
  const rightMost: number = arr[arr.length - 1];
  let minIndex: number = 0;
  let atZero: boolean = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < rightMost) {
      minIndex = i;
      break;
    } else if (i === 0 && arr[i] > rightMost) {
      atZero = true;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      arr[arr.length - 1] = arr[arr.length - 2];
      console.log(...arr);
    } else {
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
      } else {
        arr[i] = arr[i - 1];
        console.log(...arr);
      }
    }
  }
}
// insertionSort1(5, [1, 2, 4, 5, 3]);
// insertionSort1(5, [2, 4, 6, 8, 3]);
// insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);

/**
 * Quicksort 1 - Partition
 * https://www.hackerrank.com/challenges/quicksort1/problem
 */
function quicksort(arr: number[]): any {
  const pivot: number[] = [arr[0]];
  const left: number[] = [];
  const right: number[] = [];
  for (let i of arr) {
    if (i > arr[0]) right.push(i);
    else if (i < arr[0]) left.push(i);
  }
  return left.concat(pivot).concat(right);
}
// quicksort([4, 5, 3, 7, 2]);

/**
 * Mars Exploration
 * https://www.hackerrank.com/challenges/mars-exploration/problem
 */
function marsExplorations(s: string): number {
  let sos: string = '';
  const times: number = s.length / 3;
  let error: number = 0;
  for (let i = 0; i < times; i++) sos += 'SOS';
  for (let i = 0; i <= s.length; i++) {
    if (s.charAt(i) !== sos.charAt(i)) error++;
  }
  return error;
}
// marsExplorations('SOSSPSSQSSOR');
// marsExplorations('SOSSOT');
// marsExplorations('SOSSOSSOS');

/**
 * Running Time of Algorithms
 * https://www.hackerrank.com/challenges/runningtime/problem
 */
// function runningTime(arr: number[]): number {
//   // console.log(arr);
//   let count: number = 0;
//   for (let i = 1; i < arr.length; i++) {
//     // console.log('current check:', arr[i]);
//     const beforeIndex: number = i - 1;
//     if (beforeIndex === 0) {
//       if (arr[0] === arr[i]) break;
//       else if (arr[0] > arr[i]) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         count++;
//       }
//     } else {
//       for (let j = beforeIndex; j > 0; j--) {
//         // console.log(arr[j]);
//         // console.log('arr[j-1]:', arr[j - 1]);
//         if (arr[i] < arr[j] && arr[i] >= arr[j - 1]) {
//           let value: number = arr[i];
//           // console.log('stop');
//           // console.log(arr);
//           arr.splice(i, 1);
//           arr.splice(j - 1, 0, value);
//           // console.log(arr);
//           // break;
//         } else if (arr[i] < arr[j] && arr[i] < arr[j - 1]) {
//           // console.log('last:', arr[j - 1]);
//           let value: number = arr[i];
//           arr.splice(i, 1);
//           arr.splice(0, 0, value);
//           // console.log(arr);
//           // count++;
//         }
//       }
//       count++;
//     }
//   }
//   console.log(arr);
//   console.log('count:', count);
//   return count;
// }
// runningTime([2, 1, 3, 1, 2]);
// runningTime([1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9]);
// runningTime([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
// runningTime([4, 124, 513, 2, 35, 64, 768, 2, 64, 0, 14, 2]);

/**
 * Pangrams
 * https://www.hackerrank.com/challenges/pangrams/problem
 */
interface pangrams {
  [index: string]: number;
}
function pangrams(s: string): string {
  const alphabets: string = 'abcdefghijklmnopqrstuvwxyz';
  const check: pangrams = {};
  let pangram: string = 'pangram';
  for (let i of alphabets) if (!check[i]) check[i] = 0;
  for (let i of s) {
    if (i !== ' ') {
      if (i === i.toLowerCase() || i === i.toUpperCase()) {
        i = i.toLowerCase();
        check[i] = check[i] + 1;
      }
    }
  }
  for (let v of Object.values(check)) if (v === 0) pangram = 'not pangram';
  return pangram;
}
// pangrams('We promptly judged antique ivory buckles for the next prize');
// pangrams('We promptly judged antique ivory buckles for the prize');

/**
 * HackerRank in a String
 * https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 */
type hackkerrankString = 'YES' | 'NO';
function hackerrankInString(s: string): hackkerrankString {
  const main: string = 'hackerrank';
  const arr: string[] = [];
  let a: number = 0,
    b: number = 0;
  while (true) {
    if (b === s.length) break;
    if (s.charAt(b) === main.charAt(a)) {
      arr.push(s.charAt(b));
      a++;
    }
    b++;
  }
  if (arr.join('') === main) return 'YES';
  else return 'NO';
}
// hackerrankInString('hereiamstackerrank');
// hackerrankInString('hackerworld')

/**
 * Caesar Cipher
 * https://www.hackerrank.com/challenges/caesar-cipher-1/problem
 */
function caesarCipher(s: string, k: number): string {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  const arr: string[] = alphabet.split('');
  let str: string = '';
  function findRotate(i: number, plus: number): string {
    let newString: number = i + plus;
    if (newString > arr.length - 1) {
      newString = newString % arr.length;
      if (newString === -1) {
        if (i === 25) return arr[24];
        else if (i === 0) return arr[25];
      }
      return arr[newString];
    } else return arr[newString];
  }
  for (let i of s) {
    if (arr.includes(i.toLowerCase()) || arr.includes(i.toUpperCase())) {
      let text: string = i;
      let newText: string = findRotate(arr.indexOf(i.toLowerCase()), k);
      if (text === text.toUpperCase()) newText = newText.toUpperCase();
      str += newText;
    } else str += i;
  }
  // console.log(str);
  return str;
}
// caesarCipher('middle-Outz', 2);
// caesarCipher("There's-a-starman-waiting-in-the-sky", 3);
// caesarCipher('www.abc.xy', 87);

/**
 * Strong Password
 * https://www.hackerrank.com/challenges/strong-password/problem
 */
interface minNumReg {
  numbers: RegExp;
  lower_case: RegExp;
  upper_case: RegExp;
  special_characters: RegExp;
}
interface minNumCheck {
  numbers: number;
  lower_case: number;
  upper_case: number;
  special_characters: number;
}
function minimumNumber(n: number, password: string): number {
  const validate: minNumReg = {
    numbers: /[0-9]/,
    lower_case: /[a-z]/,
    upper_case: /[A-Z]/,
    special_characters: /[-!@#$%^&*()+]/,
  };
  const check: minNumCheck = {
    numbers: 0,
    lower_case: 0,
    upper_case: 0,
    special_characters: 0,
  };
  for (let i of password) {
    if (validate.numbers.test(i)) check.numbers++;
    else if (validate.lower_case.test(i)) check.lower_case++;
    else if (validate.upper_case.test(i)) check.upper_case++;
    else if (validate.special_characters.test(i)) check.special_characters++;
  }
  let numToAdd: number = 0;
  if (check.numbers === 0) numToAdd++;
  if (check.lower_case === 0) numToAdd++;
  if (check.upper_case === 0) numToAdd++;
  if (check.special_characters === 0) numToAdd++;
  let newLength: number = numToAdd;
  if (newLength + n < 6) newLength += 6 - (newLength + n);
  return newLength;
}
// minimumNumber(7, 'AUzs-nV');
// minimumNumber(5, '2bbbb');
// minimumNumber(11,'#HackerRank')
// minimumNumber(3,'Ab1')

/**
 * Strange Counter
 * https://www.hackerrank.com/challenges/strange-code/problem
 */
function strangeCounter(t: number): number {
  let col: number = 3;
  let time: number = 3;
  let r: number = 0;
  if (t <= 3) return (r = time - t + 1);
  while (t > time) {
    col *= 2;
    time += col;
    if (time > t) {
      if (time - t !== 0) r = time - t + 1;
    } else if (time === t) r = 1;
  }
  return r;
}
// strangeCounter(4);
// strangeCounter(1);
// strangeCounter(9);
// strangeCounter(21);

/**
 * Weighted Uniform Strings
 * https://www.hackerrank.com/challenges/weighted-uniform-string/problem
 * 8/32 test cases failed :(
 */
function weightdUniformStrings(s: string, queries: number[]): string[] {
  const alphabet: string = ' abcdefghijklmnopqrstuvwxyz';
  const index: string[] = alphabet.split('');
  const wString: string[] = [];
  // console.log(s);
  // console.log(index);
  const weight: number[] = [];
  const count: { [index: string]: number } = {};
  let i: number = 0;
  /* V.2 */
  for (let i of s) {
    // console.log(i);
    if (!count[i]) count[i] = 1;
    else count[i]++;
  }
  console.log(count);
  for (let i of Object.entries(count)) {
    // console.log(i);
    let sWeight: number = index.indexOf(i[0]);
    let strCount: number = i[1];
    let j: number = 1;
    while (j <= strCount) {
      let totalWeight: number = sWeight * j;
      weight.push(totalWeight);
      j++;
    }
  }
  // console.log(weight);
  for (let i of queries) {
    if (weight.indexOf(i) !== -1) wString.push('Yes');
    else wString.push('No');
  }
  // console.log(wString);
  return wString;
}
// weightdUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]);
// weightdUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]);
// weightdUniformStrings('aaabbbbcccddd', [9, 7, 8, 12, 5]);

/**
 * Funny String
 * https://www.hackerrank.com/challenges/funny-string/problem
 */
type Funny = 'Funny' | 'Not Funny';
function funnyString(s: string): Funny {
  let rString: string = s.split('').reverse().join('');
  let result: Funny = 'Not Funny';
  let asciiN: number[] = [];
  let asciiR: number[] = [];
  const sumN: number[] = [];
  const sumR: number[] = [];
  for (let i = 0; i < s.length; i++) {
    asciiN.push(s.charCodeAt(i));
    asciiR.push(rString.charCodeAt(i));
  }
  for (let j = 0; j <= asciiN.length - 2; j++) {
    sumN.push(Math.abs(asciiN[j] - asciiN[j + 1]));
    sumR.push(Math.abs(asciiR[j] - asciiR[j + 1]));
  }
  for (let k = 0; k < sumN.length; k++) {
    if (sumN[k] === sumR[k]) result = 'Funny';
    else {
      result = 'Not Funny';
      break;
    }
  }
  return result;
}
// funnyString('lmnop');
// funnyString('acxz');
// funnyString('bcxz');
// funnyString('ivvkxq');
// funnyString('ivvkx');

/**
 * Separate the Numbers
 * https://www.hackerrank.com/challenges/separate-the-numbers/problem
 */
// function separateNUmbers(s: string): string {
//   let test: number = 0;
//   console.log('start string:', s);
//   console.log('string.length:', s.length);
//   let index: number = 1;
//   let indexNext: number = index + 1;
//   let status: 'YES' | 'NO' = 'NO';
//   const limit: number = Math.round(s.length / 2);
//   // while (test < 1) {
//   while (index < s.length) {
//     let checkNum: string[] = [];
//     for (let i = index, j = 0; i <= s.length; i += index, j += index) {
//       console.log('string cut:', s.substring(j, i));
//       checkNum.push(s.substring(j, i));
//       console.log(checkNum);
//       /* CHECK IF NEW VALUE IS EQUAL LAST VALUE + 1 */
//       if (checkNum.length > 1) {
//         let last: number = parseInt(checkNum[checkNum.length - 1]);
//         let beforeLast: number = parseInt(checkNum[checkNum.length - 2]);
//         // console.log(last, beforeLast);
//         if (last !== beforeLast + 1) {
//           // console.log('last:', last);
//           status = 'NO';
//           break;
//         } else status = 'YES';
//       }
//     }
//     console.log('status ROUND 1:', status);
//     if (status === 'YES') break;
//     else {
//       checkNum = [];
//       let times: number = 1;
//       let maxTimes: number = Math.round(s.length / 2);
//       let sIndexNext: number = index;
//       let jIndexNext: number = 0;
//       console.log('index:', index, 'nextIndex:', indexNext);
//       while (times <= maxTimes) {
//         if (times === 1) {
//           console.log('string cut:', s.substring(jIndexNext, index));
//           checkNum.push(s.substring(jIndexNext, index));
//           jIndexNext += index;
//           sIndexNext += indexNext;
//         } else if (times === 2) {
//           console.log('string cut:', s.substring(jIndexNext, sIndexNext));
//           checkNum.push(s.substring(jIndexNext, sIndexNext));
//           jIndexNext += indexNext;
//           sIndexNext += indexNext;
//         } else {
//           console.log('string cut:', s.substring(jIndexNext, sIndexNext));
//           checkNum.push(s.substring(jIndexNext, sIndexNext));
//           jIndexNext += indexNext;
//           sIndexNext += indexNext;
//         }
//         console.log(checkNum);
//         /* CHECK IF NEW VALUE IS EQUAL LAST VALUE + 1 */
//         if (checkNum.length > 1) {
//           let last: number = parseInt(checkNum[checkNum.length - 1]);
//           let beforeLast: number = parseInt(checkNum[checkNum.length - 2]);
//           if (last !== beforeLast + 1) {
//             // console.log('last:', last);
//             status = 'NO';
//             break;
//           } else status = 'YES';
//         }
//         console.log('status ROUND 2:', status);
//         // if (status === 'YES') break;
//         times++;
//       }
//     }
//     console.log('status end of loop:', status);
//     if (status === 'NO') {
//       index++;
//       indexNext++;
//     } else if (status === 'YES') {
//       console.log(checkNum);
//       break;
//     }
//     console.log('\n');
//     // test++;
//   }
//   console.log('STATUS RETURN:', status);
//   // console.log('\n');
// }
// separateNUmbers('1234');
// separateNUmbers('91011');
// separateNUmbers('99100');
// separateNUmbers('101103');
// separateNUmbers('010203');
// separateNUmbers('13');
// separateNUmbers('1');

// separateNUmbers('99910001001') //YES 999
// separateNUmbers('7891011'); //yes7
// separateNUmbers('9899100'); //yes 98
// separateNUmbers('999100010001'); //no

/**
 * Gemstones
 * https://www.hackerrank.com/challenges/gem-stones/problem
 */
function gemstones(arr: string[]): number {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let gemstones: number = 0;
  for (let i = 0; i < alphabet.length; i++) {
    let count: number = 0;
    let char: string = alphabet.charAt(i);
    for (let str of arr) {
      if (str.includes(char)) count++;
      else break;
    }
    if (count === arr.length) gemstones++;
  }
  return gemstones;
}
// gemstones(['abcdde', 'baccd', 'eeabg']);

/**
 * Alternting Characters
 * https://www.hackerrank.com/challenges/alternating-characters/problem
 */
function alternatingCharacters(s: string): number {
  let count: number = 0;
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i - 1) === s.charAt(i)) count++;
  }
  return count;
}
// alternatingCharacters('AAAA');

/**
 * Beautiful Binary String
 * https://www.hackerrank.com/challenges/beautiful-binary-string/problem
 */
function beautifulBinaryString(b: string): number {
  let index: number = 0;
  let count: number = 0;
  while (index !== b.length - 2) {
    const str: string = b.charAt(index);
    if (str === '0') {
      const strNext: string = b.charAt(index + 1);
      const strNextNext: string = b.charAt(index + 2);
      if (strNext === '1' && strNextNext === '0') {
        let strArr: string[] = b.split('');
        strArr[index + 2] = '1';
        b = strArr.join('');
        count++;
      }
    }
    index++;
  }
  return count;
}
// beautifulBinaryString('0101010');
// beautifulBinaryString('01100');
// beautifulBinaryString('0100101010');

/**
 * The Love-Letter Mystery
 * https://www.hackerrank.com/challenges/the-love-letter-mystery/problem
 */
function theLoveLetterMystery(s: string): number {
  let count: number = 0;
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    const charCode1: number = s.charCodeAt(i);
    const charCode2: number = s.charCodeAt(j);
    if (charCode1 !== charCode2) {
      let strArr: string[] = s.split('');
      strArr[j] = strArr[i];
      s = strArr.join('');
      let diff: number = Math.abs(charCode1 - charCode2);
      count += diff;
    }
  }
  return count;
}
// theLoveLetterMystery('abc');
// theLoveLetterMystery('abcba');
// theLoveLetterMystery('abcd');
// theLoveLetterMystery('cba');

/**
 * Closest Nubmers
 * https://www.hackerrank.com/challenges/closest-numbers/problem
 */
function closestNumbers(arr: number[]): number[] {
  const arrSort: number[] = arr.sort((a, b) => a - b);
  let minDiff: number = 0;
  let minArr: number[] = [];
  for (let i = 0, j = i + 1; i < arrSort.length - 1; i++, j++) {
    const v1: number = arrSort[i];
    const v2: number = arrSort[j];
    const diff: number = v2 - v1;
    if (minDiff === 0) {
      minDiff = diff;
      minArr.push(v1);
      minArr.push(v2);
    } else if (diff < minDiff) {
      minArr = [];
      minArr.push(v1);
      minArr.push(v2);
      minDiff = diff;
    } else if (diff === minDiff) {
      minArr.push(v1);
      minArr.push(v2);
    }
  }
  return minArr;
}
// closestNumbers([5, 4, 3, 2, 1]);

/**
 * Find the Median
 * https://www.hackerrank.com/challenges/find-the-median/problem
 */
function findMedian(arr: number[]): number {
  const sortArr: number[] = arr.sort((a, b) => a - b);
  const median: number = Math.floor(sortArr.length / 2);
  return sortArr[median];
}
// findMedian([0, 1, 2, 4, 6, 5, 3]);

/**
 * Game of Thrones - I
 * https://www.hackerrank.com/challenges/game-of-thrones/problem
 */
function gameofThrones(s: string): 'YES' | 'NO' {
  let status: 'YES' | 'NO' = 'YES';
  const check: { [index: string]: number } = {};
  for (let i of s) {
    if (!check[i]) check[i] = 1;
    else check[i]++;
  }
  const arr: number[] = Object.values(check);
  let evenNum: number = 0;
  let oddNum: number = 0;
  for (let j of arr) {
    if (j % 2 === 0) evenNum++;
    else if (j % 2 !== 0) oddNum++;
  }
  if (evenNum === arr.length - 1 && oddNum === 1) status = 'YES';
  else if (evenNum === arr.length) status = 'YES';
  else status = 'NO';
  return status;
}
// gameofThrones('aaabbbb');
// gameofThrones('cdefghmnopqrstuvw');
// gameofThrones('cdcdcdcdeeeef');

/**
 * Making Anagrams
 * https://www.hackerrank.com/challenges/making-anagrams/problem
 */
function makingAnagrams(s1: string, s2: string): number {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let count: number = 0;
  for (let str of alphabet) {
    let countStr1: number = 0;
    let countStr2: number = 0;
    for (let i of s1) if (i === str) countStr1++;
    for (let j of s2) if (j === str) countStr2++;
    let diff: number = Math.abs(countStr1 - countStr2);
    count += diff;
  }
  return count;
}
// makingAnagrams('cde', 'abc');
// makingAnagrams('abc', 'amnop');
// makingAnagrams(
//   'absdjkvuahdakejfnfauhdsaavasdlkj',
//   'djfladfhiawasdkjvalskufhafablsdkashlahdfa'
// );

/**
 * Anagram
 * https://www.hackerrank.com/challenges/anagram/problem
 */
// type countStr = { [index: string]: number };
// function anagram(s: string): number {
//   const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
//   console.log(s);
//   if (s.length % 2 !== 0) return -1;
//   const divided: number = s.length / 2;
//   let str1: string = s.slice(0, divided);
//   let str2: string = s.slice(divided, s.length);
//   console.log(str1, str2);
//   console.log(str1.split('').sort().join(''), str2.split('').sort().join(''));

//   let count1: countStr = {};
//   let count2: countStr = {};
//   for (let i = 0; i < str1.length; i++) {
//     if (!count1[str1.charAt(i)]) count1[str1.charAt(i)] = 1;
//     else count1[str1.charAt(i)]++;
//     if (!count2[str2.charAt(i)]) count2[str2.charAt(i)] = 1;
//     else count2[str2.charAt(i)]++;
//   }
//   console.log(count1, count2);

//   let countA: number = 0;
//   let countB: number = 0;
//   for (let i of Object.entries(count1)) {
//     let v1: number = i[1];
//     let v2: number = count2[i[0]];
//     if (v2) {
//       let sum: number = v1 - v2;
//       if (sum > 0) countA++;
//     } else countA += v1;
//   }
//   for (let i of Object.entries(count2)) {
//     let v1: number = i[1];
//     let v2: number = count1[i[0]];
//     if (v2) {
//       let sum: number = v1 - v2;
//       if (sum > 0) countB++;
//     } else countB += v1;
//   }
//   console.log('countA:', countA, 'countB:', countB);

//   let min: number;
//   countA < countB ? (min = countA) : (min = countB);
//   console.log(min);

//   console.log('\n');
//   if (min === 0) return 0;
//   else return min;
// }
// anagram('aaabbb');
// anagram('ab');
// anagram('mnop');
// anagram('xyyx');
// anagram('xaxbbbxx');
// anagram('asdfjoieufoa');
// anagram('fdhlvosfpafhalll');
// anagram('mvdalvkiopaufl');
