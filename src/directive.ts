import type { Directive, DirectiveBinding } from 'vue'
import { parseTestId } from './parse-testid'
import type { TestId } from './interface'

// TODO: make this value configurable
const datasetName = 'testid'

// TODO: render testids only in dev mode
function setTestId(el: HTMLElement, binding: DirectiveBinding<TestId>) {
  const id = parseTestId(binding.value)
  if (id) {
    el.dataset[datasetName] = id
  } else {
    delete el.dataset[datasetName]
  }
}

export const vTestDirective: Directive<HTMLElement, TestId> = {
  mounted: setTestId,
  updated: setTestId,
}
