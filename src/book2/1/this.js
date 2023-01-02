class Person {
  constructor(name) {
    this.name = name;
  }
  hello = () => {
    console.log(`Hello! My Name Is ${this.name}`);
  };
}

function greet(eos) {
  console.log(`Hi, I'm ${this.name}${eos}`);
}

const queuek = new Person("queuek");
queuek.hello()

greet.call(queuek, "!");

const queuek1 = new Person("queuek1");
const greeting = greet.bind(queuek1);
greeting("!");

queuek.aisatu = greet
queuek.aisatu('!')

