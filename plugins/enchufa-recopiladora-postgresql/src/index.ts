import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginPostgresql: Plugin = {
  name: 'PluginPostgresql',
  type: pluginType.Store,
  execute: () => {
    console.log('Executing Plugin Postgresql');
  }
};