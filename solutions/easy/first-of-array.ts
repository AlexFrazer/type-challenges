export type First<T extends any[]> = T[0];

type Test = First<[1,2,3]>;