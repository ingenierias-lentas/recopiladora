import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginPostgresql: Plugin = {
  name: 'PluginPostgresql',
  type: 'store',
  execute: () => {
    console.log('Executing Plugin Postgresql');
  }
};