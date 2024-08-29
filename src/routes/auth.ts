//TODO Passport.js
import Router from '@koa/router';

export const authRouter = new Router(
    {
        prefix: '/auth'
    }
);

authRouter.get('/', async (ctx, next) => {
    ctx.status = 200; // Set the status code to 200
    ctx.body = 'OK';  // Set the response body
});
