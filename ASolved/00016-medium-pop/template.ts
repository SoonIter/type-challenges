type Pop<T extends any[]> = T extends [...infer rest, any] ? rest : never;
