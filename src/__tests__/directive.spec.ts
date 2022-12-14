import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { VueTestIdDirective } from '../directive'
import * as parser from '../parse-testid'

describe('VueTestidDirective', () => {
  it('shows testid in correct dataset when set', async () => {
    const wrapper = mountTestDirective('customTestId', 'my-mocked-id')
    expect(wrapper.attributes()['data-custom-test-id']).toEqual('my-mocked-id')

    await wrapper.setData({ testid: undefined })
    expect(wrapper.attributes()['data-custom-test-id']).toBeUndefined()
  })

  it('shows no testid when active is false', () => {
    const wrapper = mountTestDirective('customTestId', 'my-mocked-id', false)
    expect(wrapper.attributes()['data-custom-test-id']).toBeUndefined()
  })
})

function mountTestDirective(dataset: string, testid: string, active: boolean = true) {
  // mock testid parser - returns the same value the function gets called with
  vi.spyOn(parser, 'parseTestId').mockImplementation((v: any) => v)

  // create component with v-test directive
  const TestComponent = {
    template: `<div v-test="testid" />`,
    data: () => ({
      testid, // set testid as data to make it reactice
    }),
  }

  // mount component with directive
  return mount(TestComponent, {
    global: {
      directives: {
        test: VueTestIdDirective(dataset, active),
      },
    },
  })
}
