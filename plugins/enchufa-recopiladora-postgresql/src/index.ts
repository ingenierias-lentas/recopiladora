import { Plugin, PluginType } from '@recopiladora/types';

export const PluginPostgresql: Plugin = {
  name: 'PluginPostgresql',
  type: PluginType.Store,
  execute: () => {
    console.log('Executing Plugin Postgresql');
  }
};