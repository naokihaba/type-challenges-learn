* 問題
  * オブジェクト型 T のすべてのプロパティを読み取り専用にする `Readonly<T>` を自作する
* 制約
  * 組み込みの `Readonly` を使用しない
  * 読み取り専用プロパティは再代入できない
* 例
  * `MyReadonly<{ title: string }>` → `{ readonly title: string }`
