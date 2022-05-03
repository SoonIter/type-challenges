// type First<T extends any[]> = T extends [
//   First: infer FirstType,
//   ...others: any[]
// ]
//   ? FirstType
//   : never;
type First<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
