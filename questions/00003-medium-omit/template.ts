// type MyOmit<T extends Object, K extends keyof T> = {
//   [P in MyExclude<keyof T, K>]: T[P];
// }

type MyOmit<T extends Object, K extends keyof T> = {
  [p in keyof T as p extends K ? never : p]: T[p]
}

// type ttt = MyOmit<true, false>
