type TrimLeft<S extends string> = S extends `${"\n" | "\t" | " "}${infer X}`
  ? TrimLeft<X>
  : S;
