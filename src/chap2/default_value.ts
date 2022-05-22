import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question("名前を入力してください: ", (name) => {
  const display_name = name || "jane doe";
  console.log(display_name);
  rl.close();
});
