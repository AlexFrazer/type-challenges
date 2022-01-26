export type TOmit<T extends object, K extends keyof T> = {
  [Key in keyof Exclude<T, K>]: T[K];
};

type Foo = Omit<{ foo: string, bar: string }, 'bar'>;
