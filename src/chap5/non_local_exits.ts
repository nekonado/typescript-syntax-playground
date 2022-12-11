try {
  console.log("start try 1-1");
  try {
    console.log("start try 2-1");
    throw new Error("2層目で例外が発生しました");
    console.log("no run");
  } catch (err) {
    console.log(err);
  }
  // 例外処理は2層目で完了したので、1層目では例外は隠蔽されている
  console.log("run");
} catch (err) {
  console.log(err);
}

console.log("-------------------");

try {
  console.log("start try 2-1");
  try {
    console.log("start try 2-2");
    throw new Error("大域脱出のテスト");
  } finally {
    console.log("finallyブロックは脱出に割り込むことができます");
  }
} catch (err) {
  console.log(err);
}
