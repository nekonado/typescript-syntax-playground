import { readFile } from "fs/promises";

// ファイルパスは実行時のカレントディレクトリからの相対パス
const p = readFile("./dist/chap8/foo.txt", "utf8");

p.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err.message);
});

