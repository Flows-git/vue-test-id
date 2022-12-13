import type { App, Plugin } from 'vue'
import { vTestDirective } from './directive'
import { VueTestIdConfig } from './interface'

export function VueTestId(config?: VueTestIdConfig): Plugin {
  const _config: Required<VueTestIdConfig> = {
    ...{ directive: 'test', testid: 'testid' },
    ...config
  }
  return {
    install(app: App) {
      app.directive(_config.directive, vTestDirective)
    },
  }
}

export default VueTestId
