import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginBigquery: Plugin = {
  name: 'PluginBigquery',
  type: pluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Bigquery');
  }
};