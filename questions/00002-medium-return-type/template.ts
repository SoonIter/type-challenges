type MyReturnType<T> = T extends (...args: any[]) => infer V ? V : never;
