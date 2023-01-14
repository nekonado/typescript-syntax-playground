type Func = (num: number) => number;

const func: Func = (num: number) => {
  return num ** 10;
};

type Obj1 = { foo: string; bar: boolean };
type Obj2 = { foo: number; bar: boolean };

// [check] Intersection Types
type IntersectionType = Obj1 & Obj2;
// 以下はfooがnever型になってしまうのでNG
// const obj: IntersectionType = { foo: 100, bar: true };

interface In1 {
  foo: string;
  bar: boolean;
}
// [check] extends interface
interface In2 extends In1 {
  baz: boolean;
}

const interfaceObj: In2 = { foo: "Hello", bar: true, baz: false };

// [check] const assertion
const Sample = { foo: 100, bar: true, baz: "Hello" } as const;

type SampleType = typeof Sample;

type SampleKeyType = keyof SampleType;
type SampleValueType = SampleType[SampleKeyType];

const arr = [1, 2, 3, 4, 5] as const
type arrKeyType = keyof typeof arr
type arrAllValueType = typeof arr[arrKeyType]
type arrInstanceValueType = typeof arr[number]

// 講義のオブジェクトの型にブラケット構文的にkeyの型を与えると値の対応するプロパティの値の型が返る
const str: In1['foo'] = ''


interface ArgType {
  foo: string
}

interface ExtendsArgType extends ArgType {
  bar: number
}

const argTypeCheckFunc = (arg: ArgType) => {
  console.log(arg)
}

const arg: ExtendsArgType  = {foo: 'hello', bar: 10000}

argTypeCheckFunc(arg)

export {};
