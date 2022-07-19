type If<C extends boolean, T, F> = C extends true
  ? T
  : C extends false
  ? F
  : never;
