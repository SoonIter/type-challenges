// type MyOmit<T, K> = any
type MyOmit<T extends Object, K extends keyof T> = any;
