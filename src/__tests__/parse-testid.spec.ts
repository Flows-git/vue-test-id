import { describe, expect, it } from 'vitest'
import type { TestId } from '../interface'
import { parseTestId } from '../parse-testid'

const testValues: Array<{ testId: TestId; expected: string | undefined }> = [
  // When any value is empty or undefined don't render a testid
  { testId: [], expected: undefined },
  { testId: '', expected: undefined },
  { testId: undefined, expected: undefined },
  { testId: [['aa', []], 'dd'], expected: undefined },
  { testId: ['aa', undefined, 'cc'], expected: undefined },
  { testId: [['aa', undefined], 'cc'], expected: undefined },
  { testId: [['aa', ['bb', undefined]], 'dd'], expected: undefined },
  { testId: [['aa', ['bb', '']], 'dd'], expected: undefined },
  // renders correct testid no matter how deep the array is nested
  { testId: 'aa', expected: 'aa' },
  { testId: ['aa', 'bb', 'cc'], expected: 'aa-bb-cc' },
  { testId: [['aa', 'bb'], 'cc'], expected: 'aa-bb-cc' },
  { testId: [['aa', ['bb', 'cc']], 'dd'], expected: 'aa-bb-cc-dd' },
  { testId: [['aa', ['bb', ['cc']]], 'dd'], expected: 'aa-bb-cc-dd' },
  // also works with numbers
  { testId: ['aa', 0, 'dd'], expected: 'aa-0-dd' },
  { testId: [1, 0, 'dd'], expected: '1-0-dd' },
]

describe('parseTestId Function', () => {
  it.each(testValues)('test value $testId expect $expected', ({ testId, expected }) => {
    const result = parseTestId(testId)
    expect(result).toEqual(expected)
  })
})
