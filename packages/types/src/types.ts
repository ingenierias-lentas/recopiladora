import Router from '@koa/router';
import { pluginType } from './index';

export type PluginType = `${pluginType}`;

export interface Plugin {
  name: string;
  type: PluginType;
  router: Router;
  execute(): void;
  getSchema(): void; // Get the schema for the collected data
  marshall(): void; // Marshall data into an intermediary format
  unmarshall(): void; // Unmarshall data from an intermediary format
}

export interface CollectorPlugin extends Plugin {
  collect(): void; // Collect data from external source
}

export interface StorePlugin extends Plugin {
  store(): void; // Store data in a datastore
  generateMigration(): void; // Generate a migration to update the datastore schema
  migrate(): void; // Perform datastore migration
}
