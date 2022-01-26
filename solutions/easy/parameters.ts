export type TParameters<T extends Function> = T extends (...args: infer R) => any ? R : never;

function foo(_a: string, _b: string): void {};

type Params = TParameters<typeof foo>;
