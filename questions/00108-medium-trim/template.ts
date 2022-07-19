type SpaceType = "\n" | "\t" | " ";
type Trim<S extends string> = S extends
  | `${SpaceType}${infer P}${SpaceType}`
  | `${SpaceType}${infer P}`
  | `${infer P}${SpaceType}`
  ? Trim<P>
  : S;
// type Trim<S extends string> = S extends `${SpaceType}${infer P}${SpaceType}`
//   ? Equals<S, P> extends true
//     ? P
//     : Trim<P>
//   : S;
type testB = Trim<" str ">;
