type GetRequired<T> = {
  [P in keyof T as {} extends { [K in P]: T[P] } ? never : P]: T[P];
};

type test = GetRequired<{ foo: number; bar?: undefined; Cow?: string }>;
