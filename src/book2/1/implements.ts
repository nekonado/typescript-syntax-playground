class Sample {
  foo = "foo";
  #hardPrivateFoo = "foo";
  private softPrivateFoo = "foo";
}

class Bar {
  bar = "bar";
}

type Baz = {
  baz: string
};

// interface Baz {
//     baz: string
// }

class ChildBar implements Bar {
  bar = "implements bar";
}

class ChildBaz implements Baz {
  baz = "baz";
  name: string

  constructor(name: string = 'Name') {
    this.name = name
  }
}

const childBaz = new ChildBaz('Tom')
childBaz.name 
