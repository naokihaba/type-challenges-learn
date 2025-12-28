* 問題
  * オブジェクト型 T から指定したプロパティ K だけを抽出する `Pick<T, K>` を自作する
* 制約
  * 組み込みの `Pick` を使用しない
  * K は T のキーに制限される
* 例
  * `MyPick<Todo, 'title' | 'completed'>` → `{ title: string; completed: boolean }`
