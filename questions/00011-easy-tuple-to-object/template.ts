type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K;
}
