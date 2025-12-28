/**
 * 課題: Array.unshift の型版を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
 *
 * 配列型と要素を受け取り、その要素を先頭に追加した新しい配列型を返します。
 *
 * 例:
 * type Result = Unshift<[1, 2], 0>  // [0, 1, 2]
 * type Result2 = Unshift<[], 1>  // [1]
 * type Result3 = Unshift<[2, 3, 4], 1>  // [1, 2, 3, 4]
 *
 * ヒント:
 * - スプレッド構文（...）を使って配列を展開できます
 * - Push の逆を考えてみましょう
 */

// TODO(human): Unshift を実装してください

type Unshift<T extends unknown[], U> = never;

type Result = Unshift<[1, 2], 0>; // expected to be [0, 1, 2]
type Result2 = Unshift<[], 1>; // expected to be [1]
