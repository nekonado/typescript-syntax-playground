import { readFile } from "fs/promises";

const p1 = readFile("./src/chap8/foo.txt", "utf8");
const p2 = readFile("./src/chap8/foo.txt", "utf8");
const p3 = Promise.reject(new Error("rejectしました"));

// const p_all = Promise.all([p1, p2, p3]);
const p_allsetteled = Promise.allSettled([p1, p2, p3]);

// p_all.then(
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

p_allsetteled.then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
