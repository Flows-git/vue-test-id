export type TestId = string | number | Array<TestId> | undefined

export interface VueTestIdConfig {
  testid?: string
  directive?: string
}
