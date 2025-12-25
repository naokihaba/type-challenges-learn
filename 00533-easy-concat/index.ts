/**
 * 課題: JavaScript の Array.concat 関数を型システムで実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
 *
 * 2つの配列を受け取り、左から右の順序で結合した新しい配列型を返します。
 *
 * 例:
 * type Result = Concat<[1], [2]>  // [1, 2]
 * type Result2 = Concat<[1, 2], [3, 4]>  // [1, 2, 3, 4]
 * type Result3 = Concat<[], [1]>  // [1]
 *
 * ヒント:
 * - スプレッド構文（...）はタプル型でも使えます
 * - [...T, ...U] のような形で配列を展開できます
 * - ジェネリクス制約で配列型を受け取るように制限しましょう
 */

// TODO(human): Concat を実装してください

type Tuple = readonly unknown[];

type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];

type Result = Concat<[1], [2]>; // expected to be [1, 2]
