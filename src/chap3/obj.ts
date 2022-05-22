type objType = {
  foo: string;
  bar: number;
  1: 1;
  baz: "baz";
  "1baz": "1baz";
};

const obj: objType = {
  foo: "1",
  bar: 1,
  1: 1,
  baz: "baz",
  "1baz": "1baz",
};

const bar: number = obj.bar;
const one = obj["1"];
const baz = obj.baz;
