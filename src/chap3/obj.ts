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

type objType2 = {
  foo: string;
  bar?: number;
};

const obj2_1: objType2 = {
  foo: "",
};

const obj2_2: objType2 = {
  foo: "",
  bar: 1,
};
obj2_1.bar;
if (obj2_2.bar !== undefined) {
  obj2_2.bar / 100;
}

type copyType = typeof obj2_2;
