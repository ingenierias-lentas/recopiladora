// pluginServer.ts
import Koa from 'koa';
import Router from '@koa/router';
import Logger from 'koa-logger';

import { Plugin } from '@ingenierias-lentas/recopiladora-types';
import { authRouter } from './routes/auth';
import { healthRouter } from './routes/health';
import { graphQLRouter } from './routes/graphql';

class Server {
  private app: Koa;
  private router: Router;

  constructor() {
    this.app = new Koa();
    this.router = new Router(
      {
        prefix: '/api/v1',
      }
    );
  }

  // Method to add routes from a plugin
  addPluginRoutes(plugin: Plugin) {
    if (plugin.router instanceof Router) {
      this.router.use(plugin.router.routes());
    }
  }

  // Method to start the server
  start(port: number = 3000) {
    // Add auth and health routes to router
    this.router.use(authRouter.routes())
      .use(healthRouter.routes())
      .use(graphQLRouter);

    // Add logger and router to app
    this.app.use(Logger())
      .use(this.router.routes())
      .use(this.router.allowedMethods());
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default Server;
