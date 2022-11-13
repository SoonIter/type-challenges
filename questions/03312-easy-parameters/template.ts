type MyParameters<T extends Function> = T extends (...args: infer P) => unknown
  ? P
  : never
