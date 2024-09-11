import { Plugin, PluginType } from '@ingenierias-lentas/types';

export const PluginBigquery: Plugin = {
  name: 'PluginBigquery',
  type: PluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Bigquery');
  }
};