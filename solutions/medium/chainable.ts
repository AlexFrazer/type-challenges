export interface Chainable<T extends object = {}> {
  data: T;
  option<K extends PropertyKey, V>(key: K, value: V): Chainable<T & Record<K, V>>;
  get(): T;
}

declare const config: Chainable;

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

result.bar;
result.foo;
result.name;
// @ts-expect-error
result.test;