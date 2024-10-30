export type ObjectValues<T> = T[keyof T];

export type NotNullable<T> = T extends null | undefined ? never : T;

type UnionKeys<T> = T extends T ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends unknown
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never;
export type StrictUnion<T> = StrictUnionHelper<T, T>;
