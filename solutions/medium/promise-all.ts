export type PromiseAll<T extends readonly [...any[]]> = {
  [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K];
};

const promises = [
  42,
  Promise.resolve<number>(6),
  Promise.resolve<string>('Hello'),
  Promise.resolve<string>('World'),
] as const;

type A = PromiseAll<typeof promises>;