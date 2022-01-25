export type LengthOfTuple<T extends readonly any[]> = T['length'];

const tuple = [1,2,3,4] as const;

type Test = LengthOfTuple<typeof tuple>;