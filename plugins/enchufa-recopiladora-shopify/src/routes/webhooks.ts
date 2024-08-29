import Router from '@koa/router';

import { shopify } from '../lib/shopifyApi';

export const webhooksRouter = new Router(
    {
        prefix: '/webhooks'
    }
);

//TODO add webhooks setup
//authRouter.post(process.env.SHOPIFY_WEBHOOK_PATH, (ctx, next) => {

//webhooksRouter.post(process.env.SHOPIFY_WEBHOOK_PATH, express.text({type: '*/*'}), async (req, res) => {
//    try {
        // Note: the express.text() given above is an Express middleware that will read
        // in the body as a string, and make it available at req.body, for this path only.
//        await shopify.webhooks.process({
//          rawBody: req.body, // is a string
//          rawRequest: req,
//          rawResponse: res,
//        });
//      } catch (error) {
//        console.log(error.message);
//      }
//    });
//});