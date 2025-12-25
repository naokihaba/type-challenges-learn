/**
 * 課題: 組み込みの Pick<T, K> を使わずに、自分で実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
 * Pick は、型 T から プロパティ K のセットを選んで新しい型を構築します。
 *
 * 例:
 * interface Todo {
 *   title: string
 *   description: string
 *   completed: boolean
 * }
 *
 * type TodoPreview = MyPick<Todo, 'title' | 'completed'>
 * // 結果: { title: string; completed: boolean }
 *
 * ヒント:
 * - Mapped Types（マップ型）を使います
 * - K は T のキーの部分集合である必要があります
 */

// T：Todo
// K extends keyof T： KはTの部分集合であること（制約）
type MyPick<T, K extends keyof T> = {
  // [key in K]：K の各キー（title・completed）にプロパティを生成
  [key in K]: T[key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
