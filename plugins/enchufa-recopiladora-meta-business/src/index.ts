import { Plugin, PluginType } from '@recopiladora/types';

export const PluginMetaBusiness: Plugin = {
  name: 'PluginMetaBusiness',
  type: PluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Meta Business');
  }
};