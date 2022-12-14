export type TestId = string | number | Array<TestId> | undefined

export interface VueTestIdConfig {
  dataset?: string
  directive?: string
  active?: boolean
}
