import Router from '@koa/router';

import { shopify } from '../lib/shopifyApi';

const webhooksPath = process.env.SHOPIFY_WEBHOOKS_PATH || '/api/v1/shopify/webhooks'

export const webhooksRouter = new Router(
    {
        prefix: '/webhooks'
    }
);

//TODO add webhooks setup
webhooksRouter.get(webhooksPath, async (ctx, next) => {
    return
});

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