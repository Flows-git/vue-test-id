import type { Directive, DirectiveBinding } from 'vue'
import { parseTestId } from './parse-testid'
import type { TestId } from './interface'

function setDataTestId(dataset: string) {
  return (el: HTMLElement, binding: DirectiveBinding<TestId>) => {
    const id = parseTestId(binding.value)
    if (id) {
      el.dataset[dataset] = id
    } else {
      delete el.dataset[dataset]
    }
  }
}

export function VueTestIdDirective(dataset: string): Directive<HTMLElement, TestId> {
  return {
    mounted: setDataTestId(dataset),
    updated: setDataTestId(dataset),
  }
}
