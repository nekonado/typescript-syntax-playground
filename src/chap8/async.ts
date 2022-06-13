const sleepFunc = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3() {
  //   console.log("get3が呼び出されました");
  await sleepFunc(10000);
  //   sleepFunc(0).then(() => {
  //     console.log("10秒経ちました");
  //   });
  //   console.log("awaitの次に進みました");
  return 3;
}

async function main() {
  const num1 = await get3();
  const num2 = await get3();
  const num3 = await get3();
  return num1 + num2 + num3;
}

// console.log("get3を呼び出します");
// const p = get3();
// p.then((num) => {
//   sleepFunc(1000);
//   console.log(`${num}が返ってきました`);
// });
// console.log("get3を呼び出しました");

main().then((result) => {
  console.log(result);
});
