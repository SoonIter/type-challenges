type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

// type GetReadonlyKeys<T> = Required<{
//   [p in keyof T]: Equals<
//     { [Q in p]: T[p] },
//     { -readonly [Q in p]: T[p] }
//   > extends false
//     ? p
//     : never;
// }>[keyof T];
type GetReadonlyKeys<T> = keyof {
  [p in keyof T as Equals<
    { [Q in p]: T[p] },
    { -readonly [Q in p]: T[p] }
  > extends false
    ? p
    : never]-?: T[p];
};
type tests = GetReadonlyKeys<Todo2>;
interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}
