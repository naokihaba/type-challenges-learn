/**
 * 課題: 組み込みの Awaited<T> を使わずに、自分で実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
 *
 * Promise のようなラップされた型がある場合、内側の型をどうやって取得できるでしょうか？
 *
 * 例えば、Promise<ExampleType> があるとき、ExampleType を取得するには？
 *
 * 例:
 * type ExampleType = Promise<string>
 * type Result = MyAwaited<ExampleType>  // string
 *
 * type NestedPromise = Promise<Promise<number>>
 * type Result2 = MyAwaited<NestedPromise>  // number（ネストも再帰的に解決）
 *
 * ヒント:
 * - Conditional Types（条件付き型）を使います
 * - `infer` キーワードを使って型を推論・抽出できます
 * - Promise がネストしている場合は再帰的に処理する必要があります
 * - PromiseLike<T> も考慮すると、より堅牢な実装になります
 */

// TODO(human): MyAwaited を実装してください
type ExampleType = Promise<string>
type MyAwaited<T> = T extends Promise<infer U> ? U : never
type Result = MyAwaited<ExampleType> // string
