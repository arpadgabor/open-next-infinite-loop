import { SSTConfig } from 'sst'
import { Web } from './stacks/web'

export default {
  config() {
    return {
      name: 'skeleton-web',
      region: 'eu-west-1',
    }
  },

  stacks(app) {
    app.stack(Web)
  },
} satisfies SSTConfig
