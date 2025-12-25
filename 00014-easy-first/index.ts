import type { Equal, Expect } from "../utils";

/**
 * 課題: 配列 T を受け取り、その最初の要素の型を返すジェネリック型 First<T> を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 *
 * 例:
 * type arr1 = ['a', 'b', 'c']
 * type arr2 = [3, 2, 1]
 *
 * type head1 = First<arr1> // 期待される結果: 'a'
 * type head2 = First<arr2> // 期待される結果: 3
 *
 * ヒント:
 * - 配列が空の場合はどうすべきか考えてみてください
 * - Conditional Types（条件付き型）が役立ちます
 * - 配列のインデックスアクセス T[0] や infer キーワードについて調べてみてください
 */

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

/**
 * T = ['a', 'b', 'c']
 * ['a', 'b', 'c'] extends [infer F, ...unknown[]]
 * ['a', 'b', 'c'] の 1つ目の要素を F に、それ以外は unknownで無視
 * infer F = Fだけ取り出す
 * 最初の要素が T extends [infer F,...unknown[]]にあれば、最初の要素を
 * なければ neverを返す
 * T = ['a', 'b', 'c'] = 'a'
 *
 * T = [] = never
 */
type First<T extends unknown[]> = T extends [infer F, ...unknown[]] ? F : never;
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
