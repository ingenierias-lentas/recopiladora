import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginMetaBusiness: Plugin = {
  name: 'PluginMetaBusiness',
  type: 'collect',
  execute: () => {
    console.log('Executing Plugin Meta Business');
  }
};