import Router from '@koa/router';

export const healthRouter = new Router(
    {
        prefix: '/health'
    }
);

healthRouter.get('/', async (ctx, next) => {
    ctx.status = 200; // Set the status code to 200
    ctx.body = 'OK';  // Set the response body
});
