type MyPick<T extends Object, K extends keyof T> = {
  [P in K]: T[P];
};
