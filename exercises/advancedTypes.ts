// Partial Required Readonly Pick Record Exclude Extract Omit NonNullable
// Parameters ConstructorParameters ReturnType InstanceType
type P<T>  = NonNullable<T>
type A = keyof any

type MyPartial<T> = {
    [P in keyof T]?: T[P]
}

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type MyRecord<K extends keyof any, T> = {
    [P in K]: T
}

type MyExclude<T, U> = T extends U ? never : T

type MyExtrat<T, U> = T extends U ? T : never

type MyOmit<T, K extends keyof any> = MyPick<T, MyExclude<keyof T, K>>

type MyNonNullable<T> = T extends null | undefined ? never : T

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never

type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never

type Awaited<T> = T extends Promise<infer R> ? R : T

type N = Awaited<Promise<number>>