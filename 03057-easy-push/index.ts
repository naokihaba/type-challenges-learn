/**
 * 課題: Array.push のジェネリック版を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
 *
 * 配列型と要素を受け取り、その要素を末尾に追加した新しい配列型を返します。
 *
 * 例:
 * type Result = Push<[1, 2], '3'>  // [1, 2, '3']
 * type Result2 = Push<[], 1>  // [1]
 * type Result3 = Push<[1, 2, 3], 4>  // [1, 2, 3, 4]
 *
 * ヒント:
 * - スプレッド構文（...）を使って配列を展開できます
 * - Concat と似たアプローチが使えます
 */

// TODO(human): Push を実装してください

type Push<T extends number[], U extends string> = [...T, U];
type Result = Push<[1, 2], "3">; // [1, 2, '3']

export {};
