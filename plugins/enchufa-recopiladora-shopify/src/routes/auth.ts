import Router from '@koa/router';

import { shopify } from '../lib/shopifyApi';

// TODO throw if undefined
const authBeginPath = process.env.SHOPIFY_AUTH_PATH || '/api/v1/shopify/auth'
const authCallbackPath = process.env.SHOPIFY_AUTH_CALLBACK_PATH || '/api/v1/shopify/auth/callback'
const appRootPath = process.env.APP_ROOT_PATH || '/'

export const authRouter = new Router(
    {
        prefix: '/auth'
    }
);

authRouter.get(authBeginPath, async (ctx, next) => {
    const shopQueryParam = ctx.query.shop;
    let shop: string;
  
    if (Array.isArray(shopQueryParam)) {
      shop = shopQueryParam[0]; // If it's an array, take the first element
    } else if (typeof shopQueryParam === 'string') {
      shop = shopQueryParam; // If it's a string, use it directly
    } else {
      ctx.throw(400, 'Missing or invalid shop parameter'); // Handle the case where shop is undefined or not a string
      throw new Error('Unreachable code'); // This line is needed to satisfy TypeScript
    }

    const sanitizedShop = shopify.utils.sanitizeShop(shop, true);
    if (!sanitizedShop) {
        ctx.throw(400, 'Invalid shop parameter');
        throw new Error('Unreachable code'); // This line is needed to satisfy TypeScript
    }
    await shopify.auth.begin({
        shop: sanitizedShop,
        callbackPath: authCallbackPath,
        isOnline: false,
        rawRequest: ctx.req,
        rawResponse: ctx.res,
      });
});

authRouter.get(authCallbackPath, async (ctx, next) => {
  // The library will automatically set the appropriate HTTP headers
  const callback = await shopify.auth.callback({
    rawRequest: ctx.req,
    rawResponse: ctx.res,
  });

  // You can now use callback.session to make API requests

  ctx.redirect(appRootPath);
});
