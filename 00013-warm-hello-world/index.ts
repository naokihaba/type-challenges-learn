/**
 * Hello, World!
 * https://github.com/type-challenges/type-challenges/tree/main/questions/00013-warm-hello-world
 * Type Challengesでは、型システム自体を使ってアサーション（検証）を行います。
 *
 * このチャレンジでは、以下のコードを変更してテストが通る（型チェックエラーがない）ようにしてください。
 *
 * ```ts
 * // string型になることが期待されている
 * type HelloWorld = any
 *
 * // これが動作するようにする必要がある
 * type test = Expect<Equal<HelloWorld, string>>
 * ```
 */
import { Equal, Expect } from "../utils"

// 解答をここに記述してください
type HelloWorld = string

type test = Expect<Equal<HelloWorld, string>>
