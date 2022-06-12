import { readFile } from "fs/promises";

const p = readFile("./src/chap8/foo.txt", "utf8");

const p2 = p.catch((result) => {
  return result + result;
});

p2.then((result) => {
  console.log(result);
});
