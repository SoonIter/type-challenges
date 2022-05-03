type DeepReadonly<T> = T extends Record<string, unknown> | Array<unknown>
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T;
