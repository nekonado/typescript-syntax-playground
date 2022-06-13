const main2 = async (): Promise<void> => {
  const { readFile, writeFile } = await import("fs/promises");
  const barText = await readFile("./src/chap8/bar.txt", "utf8");
  await writeFile("./src/chap8/bar100.txt", `${Number(barText) * 100}`);
  console.log("書き込み完了");
};

main2().then(() => {
  console.log("async関数の実行完了");
});
