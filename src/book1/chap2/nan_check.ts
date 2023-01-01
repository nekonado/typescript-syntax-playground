const num: number = NaN;

if (Number.isNaN(num)) {
  console.log("NaN");
}

if (typeof num === "number") {
  console.log("number");
}
