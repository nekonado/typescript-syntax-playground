try {
  console.log("start try");
  const num: any = 3;
  // comple errorを回避してわざとruntime errorを発生させてみる
  //   num.map((a: any) => a);
  if (typeof num !== "object") {
    throw new Error("arrayでないデータからmapメソッドを実行しようとしました");
  }
  num.map((a: any) => a);
  console.log("end try");
} catch (error) {
  console.log(error);
}
