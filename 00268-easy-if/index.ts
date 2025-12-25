/**
 * 課題: 条件型 If<C, T, F> を実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
 *
 * 条件 C が true の場合は型 T を、false の場合は型 F を返します。
 * C は true または false のみを受け付けます（boolean 全体ではない）。
 *
 * 例:
 * type A = If<true, 'a', 'b'>   // 'a'
 * type B = If<false, 'a', 'b'>  // 'b'
 *
 * ヒント:
 * - Conditional Types（条件付き型）を使います
 * - C を boolean のサブタイプに制約する必要があります
 * - C extends true ? ... : ... の形を考えてみましょう
 */

/**
 * C = Condition（条件）
 * T = True（真の場合に返す型）
 * F = False（偽の場合に返す型）
 */
type If<C, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
