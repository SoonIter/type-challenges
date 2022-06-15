type Chainable<T extends object = {}> = {
  option<K extends string, V extends unknown>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [P in K]: V }>;
  get(): T;
};
