type MyAwaited<P extends Promise<any>> = P extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : never
