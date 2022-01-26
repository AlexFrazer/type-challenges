export type Pop<T extends any[]> = T extends [...infer Head, infer Tail] ? Head : undefined;

type A = Pop<[1,2,3,4]>;
type B = Pop<[1]>;
type C = Pop<[]>;