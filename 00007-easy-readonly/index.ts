/**
 * 課題: 組み込みの Readonly<T> を使わずに自分で実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 *
 * Readonly は、オブジェクト型 T のすべてのプロパティを読み取り専用にします。
 * 読み取り専用になったプロパティは再代入できなくなります。
 *
 * 例:
 * interface Todo {
 *   title: string
 *   description: string
 * }
 *
 * const todo: MyReadonly<Todo> = {
 *   title: "Hey",
 *   description: "foobar"
 * }
 *
 * todo.title = "Hello"  // エラー！読み取り専用プロパティは再割り当てできません
 *
 * ヒント:
 * - Mapped Types で各プロパティを変換できます
 * - readonly 修飾子をプロパティに付けると読み取り専用になります
 * - [K in keyof T] でオブジェクトの各キーをイテレートできます
 */

interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  // { readonly title: string, readonly description: string}
  readonly [P in keyof T]: T[P];
};

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

export {};
