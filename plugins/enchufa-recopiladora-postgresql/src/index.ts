import { Plugin, PluginType } from '@ingenierias-lentas/types';

export const PluginPostgresql: Plugin = {
  name: 'PluginPostgresql',
  type: PluginType.Store,
  execute: () => {
    console.log('Executing Plugin Postgresql');
  }
};