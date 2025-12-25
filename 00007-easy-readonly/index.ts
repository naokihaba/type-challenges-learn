/**
 * 課題: 組み込みの Readonly<T> を使わずに、自分で実装してください。
 * https://github.com/type-challenges/type-challenges/tree/main/questions/00007-easy-readonly
 * Readonly は、型 T のすべてのプロパティを読み取り専用にした新しい型を構築します。
 * つまり、構築された型のプロパティは再代入できません。
 *
 * 例:
 * interface Todo {
 *   title: string
 *   description: string
 * }
 *
 * type ReadonlyTodo = MyReadonly<Todo>
 * // 結果: { readonly title: string; readonly description: string }
 *
 * ヒント:
 * - Mapped Types（マップ型）を使います
 * - readonly 修飾子を使います
 */

// https://typescriptbook.jp/reference/type-reuse/utility-types/readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

type ReadonlyTodo = MyReadonly<Todo>;

const todo: ReadonlyTodo = {
  title: "Clean room",
  description: "My room is messy",
};

// これはエラーになるはず（読み取り専用なので再代入できない）
// todo.title = 'Hello'
