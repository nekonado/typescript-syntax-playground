const obj1 = {
  a: "aaa",
  b: "bbb",
};

const obj = {
    [obj1.a]: 'obj1a',
    [obj1[b]]: 'obj1b',
    ccc: 'ccc'
};


const {aaa} = obj
console.log(aaa)

const {aaa: str1} = obj
console.log(str1)

const {aaa: str2, ...rest1} = obj
console.log(rest1)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [a1, ...restArr1] = arr
console.log(restArr1)
