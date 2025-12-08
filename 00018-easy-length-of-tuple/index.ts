import type { Equal, Expect } from '../utils'

/**
 * 00018-easy-length-of-tuple
 * 課題: タプル T を受け取り、その長さを返すジェネリック型 Length<T> を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-length-of-tuple/README.md
 *
 * 例:
 * type tesla = ['tesla', 'model 3', 'model X', 'model Y']
 * type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
 *
 * type teslaLength = Length<tesla> // 期待される結果: 4
 * type spaceXLength = Length<spaceX> // 期待される結果: 5
 *
 * ヒント:
 * - タプルには length プロパティがあります
 * - 配列の length は number 型ですが、タプルの length はリテラル型になります
 * - readonly なタプルも扱えるようにする必要があります
 */

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends readonly unknown[]> = T['length']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
