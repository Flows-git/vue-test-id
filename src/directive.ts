import type { Directive, DirectiveBinding } from 'vue'
import { parseTestId } from './parse-testid'
import type { TestId } from './interface'

function setDataTestId(dataset: string, active: boolean) {
  return (el: HTMLElement, binding: DirectiveBinding<TestId>) => {
    if (active) {
      const id = parseTestId(binding.value)
      if (id) {
        el.dataset[dataset] = id
      } else {
        delete el.dataset[dataset]
      }
    }
  }
}

export function VueTestIdDirective(
  dataset: string,
  active: boolean,
): Directive<HTMLElement, TestId> {
  return {
    mounted: setDataTestId(dataset, active),
    updated: setDataTestId(dataset, active),
  }
}
