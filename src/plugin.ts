import type { App, Plugin } from 'vue'
import { VueTestIdDirective } from './directive'
import { VueTestIdConfig } from './interface'

export function VueTestId(config?: VueTestIdConfig): Plugin {
  const _config: Required<VueTestIdConfig> = {
    ...{ directive: 'test', dataset: 'testid' },
    ...config,
  }
  return {
    install(app: App) {
      app.directive(_config.directive, VueTestIdDirective(_config.dataset))
    },
  }
}
