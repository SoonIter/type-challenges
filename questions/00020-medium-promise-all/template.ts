declare function PromiseAll<T extends any[]>(
  value: readonly [...T]
): Promise<{
  [P in keyof T]: Awaited<T[P]>;
}>;
