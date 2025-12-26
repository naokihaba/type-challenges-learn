/**
 * 課題: 組み込みの Pick<T, K> を使わずに自分で実装してください。
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
 *
 * Pick は、オブジェクト型 T から指定したプロパティ K だけを抽出した新しい型を作ります。
 *
 * 例:
 * interface Todo {
 *   title: string
 *   description: string
 *   completed: boolean
 * }
 *
 * type TodoPreview = MyPick<Todo, 'title' | 'completed'>
 * // => { title: string; completed: boolean }
 *
 * ヒント:
 * - Mapped Types を使ってオブジェクト型を変換できます
 * - keyof でオブジェクトのキーをユニオン型として取得できます
 * - K extends keyof T で K を T のキーに制限できます
 */
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// type Keys = keyof { title: string; description: string; completed: boolean;}
// type Keys = keyof Todo

// string
// type TitleType = Todo['title'];

// type Test = { title: string; completed: boolean; }
// type Test = { [K in 'title' | 'completed']: Todo[K] };

// K { title,completed  }
// T Todo
type MyPick<T, K extends keyof T> = {
  // P = 'title'
  // T[P] = Todo['title']
  // title: string
  // P = 'completed'
  // T[P] = Todo['completed']
  // completed: boolean
  [P in K]: T[P];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
