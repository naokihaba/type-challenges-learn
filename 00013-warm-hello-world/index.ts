/**
 * 課題: Type Challenges へようこそ！
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md
 *
 * Type Challenges では、型システム自体を使ってアサーションを行います。
 *
 * この課題では、HelloWorld 型を変更してテストが通るようにしてください。
 * （型エラーが出なくなれば正解です）
 *
 * 例:
 * type HelloWorld = any  // 現在の状態（テスト失敗）
 * type HelloWorld = string  // 正解！
 *
 * ヒント:
 * - TypeScript のプリミティブ型には string, number, boolean などがあります
 * - テストでは Equal<HelloWorld, string> で型が一致するか確認しています
 * - any 型はあらゆる型と互換性がありますが、Equal では厳密に比較されます
 */

import type { Equal, Expect } from "../utils";

// TODO(human): HelloWorld を修正してください
type HelloWorld = string;

// テストケース
type TestCases = [Expect<Equal<HelloWorld, string>>];
