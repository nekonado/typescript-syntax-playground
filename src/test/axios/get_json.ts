import axios from "axios";

let obj: any;

const callJsonPlaceHolder = () => {
  const p = axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(p);
  const p0 = p.catch((err) => console.log(err));
  console.log(p0);
  const p1 = p0.then((res) => console.log(res));
  console.log(p1);
  // .then((res) => {
  //   console.log(res);
  //   obj = res.data;
  // }
  // );
};

callJsonPlaceHolder();

console.log(obj);
