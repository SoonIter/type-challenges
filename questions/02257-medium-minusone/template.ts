type x = {
  '0': []
  '1': [unknown]
  '2': [unknown, unknown]
  '3': [unknown, unknown, unknown]
  '4': [unknown, unknown, unknown, unknown]
  '5': [unknown, unknown, unknown, unknown, unknown]
  '6': [unknown, unknown, unknown, unknown, unknown, unknown]
  '7': [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  '8': [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  '9': [
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
  ]
}

type Multiply10<a extends unknown[] = []> = [
  ...a,
  ...a,
  ...a,
  ...a,
  ...a,
  ...a,
  ...a,
  ...a,
  ...a,
  ...a,
]

type createArr<
  T extends number | string,
  arr extends unknown[] = [],
> = `${T}` extends `${infer F extends keyof x}${infer Other}`
  ? createArr<Other, [...Multiply10<arr>, ...x[F]]>
  : arr

type Add<a extends number, b extends number> = [
  ...createArr<a>,
  ...createArr<b>,
]['length']

type b = Add<5000, 4999>

type MinusOne<T extends number> = [...createArr<T>] extends [
  unknown,
  ...infer Others,
]
  ? Others['length']
  : never
