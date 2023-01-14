// functin signature
function overloadFunction(): void;
function overloadFunction(arg: number): number;
function overloadFunction(arg: string): string;

// function implementation part
function overloadFunction(arg?: number | string) {
  if (typeof arg === "number") {
    return arg * 100;
  }
  if (typeof arg === "string") {
    return `Hello, ${arg}`;
  }
  console.log("no argument");
}

overloadFunction();
console.log(overloadFunction(100));
console.log(overloadFunction("Mark"));
