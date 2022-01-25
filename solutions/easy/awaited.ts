export type Awaited<T> = T extends Promise<infer R> ? R : never;

type Test = Awaited<Promise<number>>;