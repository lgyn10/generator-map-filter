//! custom Filter using Generator

//| 1차원 filter
const myFilter = (array: any[], callbackfn: (value: any, index?: number) => unknown): unknown[] => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const tmp = callbackfn(array[i], i);
    if (tmp) arr.push(array[i]);
  }
  return arr;
};

//| filter 제너레이터
function* genFilter(array: any[], callbackfn: (value: any, index?: number) => unknown) {
  let idx = 0;
  for (const value of array) {
    if (callbackfn(value, idx) === true) yield value;
    idx++;
  }
}

// filter 함수
const genFilterFunc = (array: any[], callbackfn: (value: any, index?: number) => unknown): unknown[] => {
  return [...genFilter(array, callbackfn)];
};

// example
const filterSample = [1, 2, 3, 4, 5];
console.log(myFilter(filterSample, (v, i) => i! % 2 === 0)); // [ 1, 3, 5 ]
console.log(genFilterFunc(filterSample, (v, i) => i! % 2 === 0)); // [ 1, 3, 5 ]
