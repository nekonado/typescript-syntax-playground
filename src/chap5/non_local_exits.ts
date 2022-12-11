try {
  console.log("start try 1");
  try {
    console.log("start try 2");
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
