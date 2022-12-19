const sleepTest = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

let j = 0;

sleepTest().then(() => {
  console.log("Promiseが成功裡に解決されました");
  console.log(j);
});

for (let i = 0; i < 100000; i++) {
  j++;
  console.log(i);
}
