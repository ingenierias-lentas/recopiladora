import Router from '@koa/router';

import { collectData } from '../lib/collector';

export const dataRouter = new Router(
    {
        prefix: '/data'
    }
);

dataRouter.get('/all', (ctx, next) => {
});