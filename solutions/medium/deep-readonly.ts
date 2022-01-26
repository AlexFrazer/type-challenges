export type DeepReadonly<T> = {
  readonly [K in keyof T as T[K] extends object ? never : K]: T[K];
} & {
  [K in keyof T as T[K] extends object ? K : never]: DeepReadonly<T[K]>;
}

interface Foo {
  foo: {
    bar: {
      baz: string;
    }
  }
}

const obj: DeepReadonly<Foo> = {
  foo: {
    bar: {
      baz: 'test',
    }
  }
}

// @ts-expect-error
obj.foo.bar.baz = 'blah';