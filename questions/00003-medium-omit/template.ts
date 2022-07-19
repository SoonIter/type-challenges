type MyOmit<T extends Object, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
};
const s = ["tesla", "model 3", "model X", "model Y"];
