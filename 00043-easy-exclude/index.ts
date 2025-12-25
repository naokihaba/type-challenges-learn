/**
 * 課題: 組み込みの Exclude<T, U> を使わずに、自分で実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
 *
 * T から U に代入可能な型を除外した型を構築します。
 *
 * 例:
 * type Result = MyExclude<'a' | 'b' | 'c', 'a'>  // 'b' | 'c'
 * type Result2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>  // 'c'
 * type Result3 = MyExclude<string | number | (() => void), Function>  // string | number
 *
 * ヒント:
 * - Conditional Types（条件付き型）を使います
 * - ユニオン型に対する条件付き型は「分配」されます
 * - T extends U ? X : Y の形で、T がユニオン型の場合、各メンバーに対して個別に評価されます
 */

// TODO(human): MyExclude を実装してください

// T = 'a' | 'b' | 'c'
// U = 'a'
// 除外したい場合は never
type MyExclude<T, U> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
