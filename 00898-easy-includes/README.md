* 問題
  * 配列型に指定した要素が含まれるかを判定する `Includes` を実装する
* 制約
  * JavaScript の `Array.includes` と同じ挙動
  * 型の厳密な等価性をチェックする
  * 戻り値は `true` または `false`
* 例
  * `Includes<['Kars', 'Esidisi'], 'Dio'>` → `false`
  * `Includes<['Kars', 'Esidisi'], 'Kars'>` → `true`
  * `Includes<[1, 2, 3], 1>` → `true`
