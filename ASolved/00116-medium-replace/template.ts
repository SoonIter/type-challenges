type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Prefix}${From}${infer Post}`
  ? `${Prefix}${To}${Post}`
  : S;
