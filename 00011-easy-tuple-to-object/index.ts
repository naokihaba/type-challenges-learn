/**
 * 課題: タプル型をオブジェクト型に変換する TupleToObject を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
 *
 * タプルの各要素がキーと値の両方になるオブジェクト型を作成します。
 *
 * 例:
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 *
 * type Result = TupleToObject<typeof tuple>
 * // => {
 * //   'tesla': 'tesla',
 * //   'model 3': 'model 3',
 * //   'model X': 'model X',
 * //   'model Y': 'model Y'
 * // }
 *
 * ヒント:
 * - T[number] で配列/タプルの全要素をユニオン型として取得できます
 * - as const で定義された配列はリテラル型のタプルになります
 * - Mapped Types の [K in ...] でユニオン型の各要素をイテレートできます
 * - オブジェクトのキーになれるのは string | number | symbol だけです
 */

// const tuple: readonly ["tesla", "model 3", "model X", "model Y"]
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// type Hoge = "tesla" | "model 3" | "model X" | "model Y"
// type Hoge = ["tesla", "model 3", "model X", "model Y"][number]


type TupleToObject<T extends readonly PropertyKey[]> = {
  // T[number] = "tesla" | "model 3" | "model X" | "model Y"
  [P in T[number]]: P;
};

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

export {};
