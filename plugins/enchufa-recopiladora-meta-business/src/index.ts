import { Plugin, PluginType } from '@ingenierias-lentas/types';

export const PluginMetaBusiness: Plugin = {
  name: 'PluginMetaBusiness',
  type: PluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Meta Business');
  }
};