export type ExtractElementByType<T, TType extends string> = T extends Array<infer U> ? (U extends { _type: TType } ? U : never) : never
