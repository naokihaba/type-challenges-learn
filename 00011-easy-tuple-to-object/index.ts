/**
 * 課題: 配列（タプル）をオブジェクト型に変換する型を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 *
 * 与えられた配列の要素が、キーと値の両方になるオブジェクト型を構築します。
 *
 * 例:
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 *
 * type result = TupleToObject<typeof tuple>
 * // 結果: { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }
 *
 * ヒント:
 * - `as const` を使うと、配列がリテラル型のタプルになります
 * - `typeof` でタプルの型を取得できます
 * - `T[number]` でタプルの全要素の Union 型を取得できます
 * - Mapped Types（マップ型）を使います
 * - オブジェクトのキーとして使える型は `PropertyKey`（string | number | symbol）です
 */


// const tuple: readonly ["tesla", "model 3", "model X", "model Y"]
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type Elements = "tesla" | "model 3" | "model X" | "model Y"
// indexed access types
// https://typescriptbook.jp/reference/type-reuse/indexed-access-types
type Elements = (typeof tuple)[number]

type TupleToObject<T extends readonly PropertyKey[]> = {
  // tuple index access T[number] -> "tesla", "model 3", "model X", "model Y"
  [k in T[number]]: k
}

type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
// 期待する結果: { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y' }
