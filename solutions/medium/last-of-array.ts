export type Last<T extends any> = T extends [infer First, ...infer Rest] ? T extends [First] ? First : Last<Rest> : never;

type A = Last<[1,2,3]>;