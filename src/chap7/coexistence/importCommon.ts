// tsconfig.json のmoduleコンパイラオプションをcommonjsにしてコンパイルされ、
// package.json のtypeフィールドをcommonjsにした上で実行される前提の書き方
const esmodule = require("./esmodule");

console.log(esmodule.strEsModule);
esmodule.funcEsModule();

const commonjs = require("./commonjs");

console.log(commonjs.strCommonJs);
commonjs.funcCommonJs();
