import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { VueTestId } from '../plugin'
import { VueTestIdConfig } from 'src/interface'
import * as directive from '../directive'

describe('VueTestId', () => {
  it('creates plugin with passed config', async () => {
    const directiveSpy = vi.spyOn(directive, 'VueTestIdDirective').mockReturnValue({})

    const wrapper = mount(
      { template: `<div />` },
      {
        global: {
          plugins: [
            VueTestId({
              directive: 'testDirective',
              dataset: 'testDataset',
              active: false,
            }),
          ],
        },
      },
    )
    expect(directiveSpy).toHaveBeenCalledWith('testDataset', false)
  })

  it('creates plugin with default config', async () => {
    const directiveSpy = vi.spyOn(directive, 'VueTestIdDirective').mockReturnValue({})

    const wrapper = mount(
      { template: `<div />` },
      {
        global: {
          plugins: [VueTestId()],
        },
      },
    )
    expect(directiveSpy).toHaveBeenCalledWith('testid', true)
  })
})
