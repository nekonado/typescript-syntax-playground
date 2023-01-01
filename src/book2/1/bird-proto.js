function Bird(name) {
  const className = "鳥類";
  this.name = name;

  this.introduce = () => {
    console.log(`My Name is ${this.name}`);
  };

  return this;
}

Bird.explain = () => {
  console.log("This is Bird Class");
};

function FlyableBird(name) {
  Bird.call(this, name);
  this.fly = () => {
    console.log("FLY!!");
  };

  return this;
}

FlyableBird.prototype.__proto__ = Bird.prototype;

const bird = new Bird("にわとり");
const flyableBird = new FlyableBird("たか");

console.log("bird");
console.log(bird);
console.log("flyableBird");
console.log(flyableBird);
console.log("-------------");

console.log("Bird");
console.log(Bird);
console.log("FlyableBird");
console.log(FlyableBird);
console.log("-------------");

console.log("Bird.prototype");
console.log(Bird.prototype);
console.log("FlyableBird.prototype");
console.log(FlyableBird.prototype);
console.log("-------------");

console.log("Bird.prototype.__proto__");
console.log(Bird.prototype.__proto__);
console.log("FlyableBird.prototype.__proto__");
console.log(FlyableBird.prototype.__proto__);
console.log("-------------");

export {};
