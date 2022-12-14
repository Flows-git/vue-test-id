import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { VueTestId } from '../plugin'
import { TestId, VueTestIdConfig } from 'src/interface'
import * as directive from '../directive'
import { ObjectDirective } from 'vue'

describe('VueTestId', () => {
  it('creates plugin with passed config', async () => {
    const directiveSpy = vi
      .spyOn(directive, 'VueTestIdDirective')
      .mockReturnValue('this is the directive' as ObjectDirective<HTMLElement, TestId>)

    const wrapper = mount(
      { template: `<div />` },
      {
        global: {
          plugins: [
            [
              VueTestId,
              {
                directive: 'testDirective',
                dataset: 'testDataset',
                active: false,
              },
            ],
          ],
        },
      },
    )
    expect(directiveSpy).toHaveBeenCalledWith('testDataset', false)
    expect((wrapper as any).__app._context.directives.test).toBeUndefined()
    expect((wrapper as any).__app._context.directives.testDirective).not.toBeUndefined()
    expect((wrapper as any).__app._context.directives.testDirective).toBe('this is the directive')
  })

  it('creates plugin with default config', async () => {
    const directiveSpy = vi
      .spyOn(directive, 'VueTestIdDirective')
      .mockReturnValue('this is the directive' as ObjectDirective<HTMLElement, TestId>)

    const wrapper = mount(
      { template: `<div />` },
      {
        global: {
          plugins: [VueTestId],
        },
      },
    )
    expect(directiveSpy).toHaveBeenCalledWith('testid', true)
    expect((wrapper as any).__app._context.directives.test).not.toBeUndefined()
    expect((wrapper as any).__app._context.directives.test).toBe('this is the directive')
  })
})
