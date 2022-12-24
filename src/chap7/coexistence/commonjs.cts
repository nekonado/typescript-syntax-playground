const strCommonJs = "CommonJS";
const funcCommonJs = () => {
  console.log("Hello, CommonJS");
};
exports.strCommonJs = strCommonJs;
exports.funcCommonJs = funcCommonJs;

// 変数格納する必要ないので下記でOK
// exports.strCommonJs = "CommonJS";
// exports.funcCommonJs = () => {
//   console.log("Hello, CommonJS");
// };

// export {};
