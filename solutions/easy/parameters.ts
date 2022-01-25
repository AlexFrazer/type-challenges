export type TParameters<T extends Function> = T extends (...args: infer R) => any ? R : never;

function foo(a: string, b: string): void {};

type Params = TParameters<typeof foo>;
