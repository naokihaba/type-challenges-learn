* 問題
  * タプル型をオブジェクト型に変換する（各要素がキーと値の両方になる）
* 制約
  * タプルは `as const` で定義されている
  * オブジェクトのキーになれるのは `string | number | symbol` のみ
* 例
  * `TupleToObject<['tesla', 'model 3']>` → `{ tesla: 'tesla', 'model 3': 'model 3' }`
