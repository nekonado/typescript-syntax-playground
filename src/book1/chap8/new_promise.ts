const sleep = (duration: number) => {
  return new Promise<never>((resolve, reject) => {
    setTimeout(() => {
      //   resolve("成功！！");
      reject(new Error("Promiseが失敗裡に解決されました"));
    }, duration);
  });
};

sleep(3000)
  .then((res) => {
    console.log("3秒経過");
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("タイマースタート");
