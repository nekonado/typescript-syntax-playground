import axios from "axios";

let obj: any;

const callJsonPlaceHolder = () => {
  obj = axios.get("https://jsonplaceholder.typicode.com/users");
};

const res_mock = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: { lat: "-37.3159", lng: "81.1496" },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

callJsonPlaceHolder();
obj
  .then((res1: { data: Array<typeof res_mock> }) => {
    console.log(res1.data[0]);
  })
  .then((res2: any) => {
    // res2: anyは解決できなさそう？
    let i = 0;
    while (i < 10000) {
      if (i % 1000 === 0) {
        console.log(i);
      }
      i++;
    }
    console.log(res2);
  })
  .catch((err: unknown) => {
    console.log(err);
  });

console.log("同期処理は先に流れて差し込みは起こらない");

// console.log(obj);
