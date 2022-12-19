import defNum, { increment, num } from "./bar.js";

console.log(`num: ${num}`);
increment();
console.log(`num: ${num}`);

console.log(defNum);

import "./baz.js";
