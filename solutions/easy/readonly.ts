export type ReadOnly<T extends object> = {
  readonly [K in keyof T]: T[K];
}

type Foo = {
  foo: string;
  bar: string;
}

const baz: ReadOnly<Foo> = {
  foo: 'foo',
  bar: 'bar',
};