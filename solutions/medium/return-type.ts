export type TReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo(a: boolean){
  if (a) return 'Hello' as const;
  return 'World' as const;
}

type R = TReturnType<typeof foo>;