// Shallow Copy
const me = {
  name: "queuek",
  fun: { book: "haruki" },
};

const shallowMe1 = { ...me };
// const shallowMe2 = {...me}
shallowMe1.fun.book = "ryu";
// shallowMe2.fun = {book: 'ryu'}

console.log(me);
console.log(shallowMe1);
// console.log(shallowMe2)

// -------------------------------

// Deep Copy
const ai = {
  name: "queuek",
  fun: { book: "haruki" },
  age: undefined, // JSON.stringify時点で消えてしまう
};

const deepAi = JSON.parse(JSON.stringify(ai));
deepAi.name = "lah";
deepAi.fun = null;

console.log(ai);
console.log(deepAi);

// -------------------------------

import _ from "lodash";
const { cloneDeep } = _;

const deeepAi = cloneDeep(ai);
deeepAi.age = 28;

console.log(ai);
console.log(deeepAi);
