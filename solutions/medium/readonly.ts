export type TReadOnly<T extends object, K = keyof T> = {
  readonly [Key in keyof T as Exclude<Key, K>]: T[Key];
} & {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

type Test = TReadOnly<{foo: string, bar: string}, 'foo'>;
