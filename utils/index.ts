// T が True であることを期待する
export type Expect<T extends true> = T;

/**
 * <Equal<A, B>>
 * A・Bの厳密な比較をしている
 * 関数型でラップすると分配を防げる
 * ユニオン型を渡す場合（分配が起きる）
 * type C = IsString<string | number>
 * ↓ 内部でこう処理される
 * IsString<string> | IsString<number>
 * "YES" | "NO"
 */
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;
