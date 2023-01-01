import { performance } from "perf_hooks";

setTimeout(() => {
  console.log("タイマーが呼ばれました"), 1000;
});

const startTime = performance.now();
let count = 0;
while (performance.now() - startTime < 10000) {
  count++;
}
console.log(count);
