const sleepReject = (duration: number) => {
  return new Promise<unknown>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promiseが失敗しました"));
    }, duration);
  });
};

sleepReject(3000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
