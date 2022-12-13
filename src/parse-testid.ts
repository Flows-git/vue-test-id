import type { TestId } from './interface'

/**
 * parses the TestId to string
 */
export function parseTestId(id: TestId): string | undefined {
  let parsedId: string | undefined = undefined
  if ((typeof id === 'string' && id.length) || typeof id === 'number') {
    parsedId = id.toString()
  } else if (Array.isArray(id) && id.length) {
    parsedId = parseTestIdArray(id)
  }
  return parsedId
}

/**
 * Helper: parses array of TestIds to string
 */
function parseTestIdArray(ids: Array<TestId>): string | undefined {
  let parsedId = ''
  for (const [index, value] of ids.entries()) {
    const result = parseTestId(value)
    // if any value is undefined return no testid
    if (result === undefined) return
    parsedId += result
    if (ids[index + 1] !== undefined) {
      parsedId += '-'
    }
  }
  return parsedId
}
