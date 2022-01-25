export type Includes<T extends any[], K extends PropertyKey> = {
  [Key in K]: Key extends T[number] ? true : false;
}[K];

type Test = Includes<[1,2,3], 2>;
type Test2 = Includes<[1,2,3], 4>;
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`