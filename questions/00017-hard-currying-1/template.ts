type curryingType<F extends Function> = F extends (arg1: any) => any
  ? F
  : F extends (first: infer First, ...rest: infer Rest) => infer Return
  ? (first: First) => curryingType<(...rest: Rest) => Return>
  : never;
declare function Currying<F extends Function>(fn: F): curryingType<F>;
