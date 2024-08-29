import mount from 'koa-mount'; // yarn add koa-mount
import { createHandler } from 'graphql-http/lib/use/koa';

import { schema } from '../lib/dataserve/dataserve';

export const graphQLRouter = mount('/graphql', createHandler({ schema }));
