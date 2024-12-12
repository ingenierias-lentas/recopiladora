import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginMetaBusiness: Plugin = {
  name: 'PluginMetaBusiness',
  type: pluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Meta Business');
  }
};