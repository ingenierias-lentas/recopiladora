import { Plugin } from '@ingenierias-lentas/recopiladora-types';
import Server from './server';

export class Manager {
  private server: Server = new Server;
  private plugins: { [key: string]: Plugin } = {};
  private pluginOrder: string[] = [];

  loadPlugin(plugin: Plugin): void {
    this.plugins[plugin.name] = plugin;
    this.pluginOrder.push(plugin.name);
    this.server.addPluginRoutes(plugin);
  }

  executePlugin(name: string): void {
    const plugin = this.plugins[name];
    if (plugin) {
      plugin.execute();
    } else {
      console.log(`Plugin with name ${name} not found.`);
    }
  }

  executeAllPlugins(): void {
    for (const name of this.pluginOrder) {
      this.executePlugin(name);
    }
  }

  startServer(port: number = 3000): void {
    this.server.start(port);
  }
}