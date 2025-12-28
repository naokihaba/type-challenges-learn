/**
 * 課題: JavaScript の Array.includes 関数を型システムで実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
 *
 * 2つの引数を受け取り、出力は boolean の true または false になります。
 *
 * 例:
 * type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>  // false
 * type hasKars = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>  // true
 * type hasOne = Includes<[1, 2, 3], 1>  // true
 *
 * ヒント:
 * - 配列の要素を1つずつチェックする再帰的なアプローチを考えてみましょう
 * - 型の厳密な等価性をチェックする必要があります（Equal ユーティリティが役立ちます）
 * - infer と条件型を組み合わせて配列を分解できます
 */

import { Equal } from "../utils";

// T = ["Kars", "Esidisi", "Wamuu", "Santana"]
// U = "Dio"
type Includes<T extends readonly unknown[], U extends PropertyKey> =
  // [infer First, ...infer Rest]
  // First = "Kars"
  // Rest  = ["Esidisi", "Wamuu", "Santana"]
  T extends [infer First, ...infer Rest]
    ? // Equal<"Kars", "Dio"> → false
      Equal<First, U> extends true
      ? true
      : // Includes<["Esidisi", "Wamuu", "Santana"], "Dio">
        Includes<Rest, U>
    : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`

export {};
