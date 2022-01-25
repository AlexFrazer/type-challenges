export type Concat<A extends any[], B extends any[]> = [
  ...A,
  ...B,
]

type Test = Concat<[1], [2]>;