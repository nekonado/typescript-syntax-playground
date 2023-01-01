import { readFile } from "fs/promises";

// Promiseを返すsleepReject検証のためにコメントアウト
// const p = readFile("./src/chap8/foo.txt", "utf8");

// const p2 = p.then((result) => {
//   throw new Error("Error!!!");
//   // return new Error("Error!!!");
// });

// p2.then((result) => {
//   console.log(result);
// });
// // .catch((err) => {
// //   console.log(err);
// // });

const sleepReject = (duration: number) =>
  new Promise<never>((resolve, reject) => {
    setTimeout(reject, 1000);
  });

const p = readFile("./src/chap8/foo.txt", "utf8")
  .then(() => sleepReject(1000))
  .then(
    (result) => {
      console.log(result);
    },
    () => {
      console.log("error 発生");
      // return "失敗は成功のPromiseになる";
    }
  )
  .then((result) => {
    console.log(result);
  });
