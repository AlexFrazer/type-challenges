export type TupleToUnion<T extends readonly any[]> = T[number];

type Test = TupleToUnion<[1,2,3]>;