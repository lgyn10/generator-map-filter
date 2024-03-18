//! custom Map using Generator

//| 1차원 map
const myMap = (array: any[], callbackfn: (value: any, index?: number) => unknown): unknown[] => {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callbackfn(array[i], i));
  }
  return arr;
};

//| map 제너레이터
function* genMap(array: any[], callbackfn: (value: any, index?: number) => unknown) {
  let idx = 0;
  for (const value of array) {
    yield callbackfn(value, idx);
    idx++;
  }
}

// map 함수
const genMapFunc = (array: any[], callbackfn: (value: any, index?: number) => unknown): unknown[] => {
  return [...genMap(array, callbackfn)];
};

// example
const mapSample = [1, 2, 3, 4, 5];
console.log(myMap(mapSample, (v, i) => v * 2 + i!)); // [ 2, 5, 8, 11, 14 ]
console.log(genMapFunc(mapSample, (v, i) => v * 2 + i!)); // [ 2, 5, 8, 11, 14 ]
