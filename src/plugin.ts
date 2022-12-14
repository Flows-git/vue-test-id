import type { App, Plugin } from 'vue'
import { VueTestIdDirective } from './directive'
import { VueTestIdConfig } from './interface'

export const VueTestId: Plugin = {
  install(app: App, config?: VueTestIdConfig) {
    const _config: Required<VueTestIdConfig> = {
      ...{ directive: 'test', dataset: 'testid', active: true },
      ...config,
    }
    app.directive(_config.directive, VueTestIdDirective(_config.dataset, _config.active))
  },
}
