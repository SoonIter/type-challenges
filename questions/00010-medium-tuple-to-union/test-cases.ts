import type { Equal, Expect } from "@type-challenges/utils";
type test = TupleToUnion<[123, "456", true]>;
type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
