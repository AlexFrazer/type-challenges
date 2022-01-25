type PPick<T extends object, K extends keyof T> = {
  [Key in K]: T[Key];
}

type Test = PPick<{foo: string; bar: string}, 'bar'>;