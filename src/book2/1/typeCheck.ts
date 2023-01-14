import { Interface } from "readline";

type Func = (num: number) => number;

const func: Func = (num: number) => {
  return num ** 10;
};

type Obj1 = { foo: string; bar: boolean };
type Obj2 = { foo: number; bar: boolean };

type IntersectionType = Obj1 & Obj2;

// const obj: IntersectionType = { foo: 100, bar: true };

interface In1 {
  foo: string;
  bar: boolean;
}
interface In2 extends In1 {
  baz: boolean;
}

const interfaceObj: In2 = { foo: "Hello", bar: true, baz: false };

const Sample = { foo: 100, bar: true, baz: "Hello" } as const;

type SampleType = typeof Sample;

type SampleKeyType = keyof SampleType;
type SampleValueType = SampleType[SampleKeyType];

const arr = [1, 2, 3, 4, 5] as const
type arrKeyType = keyof typeof arr
type arrAllValueType = typeof arr[arrKeyType]
type arrInstanceValueType = typeof arr[number]

const str: In1['foo'] = ''

export {};
