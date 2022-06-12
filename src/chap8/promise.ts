import { readFile } from "fs/promises";

// ファイルパスは実行時のカレントディレクトリからの相対パス
const p = readFile("./src/chap8/foo.txt1", "utf8");

p.then((data) => {
  console.log(data);
}).catch((err: unknown) => {
  console.log(err);
  // console.log(err.message)
});
