import { type Plugin, pluginType } from '@ingenierias-lentas/recopiladora-types';
import Router from '@koa/router';
import { collectData } from './lib/collector';
import { authRouter } from './routes/auth';
import { dataRouter } from './routes/data';
import { webhooksRouter } from './routes/webhooks';

const router = new Router(
  {
    prefix: '/shopify',
  }
);

router.use(authRouter.routes());
router.use(dataRouter.routes());
router.use(webhooksRouter.routes());

export const PluginShopify: Plugin = {
  name: 'PluginShopify',
  type: pluginType.Collect,
  router: router,
  execute: () => {
    console.log('Executing Plugin Shopify');
  },
  getSchema: () => {
    console.log('Getting schema for Plugin Shopify');
  },
  marshall: () => {
    console.log('Marshalling data for Plugin Shopify');
  },
  unmarshall: () => {
    console.log('Unmarshalling data for Plugin Shopify');
  }
};