// tsconfig.json のmoduleコンパイラオプションをesnextにしてコンパイルされ、
// package.json のtypeフィールドをmoduleにした上で実行される前提の書き方
import { strEsModule, funcEsModule } from "./esmodule.mjs";

console.log(strEsModule);
funcEsModule();

/**
 * CommonJS形式のファイル（スクリプト）からexportsされたものを
 * ESModules形式のファイル内から読み込むためのTips
 */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const commonjs = require("./commonjs.cjs");

console.log(commonjs.strCommonJs);
commonjs.funcCommonJs();
