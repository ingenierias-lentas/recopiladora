import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginGoogleAds: Plugin = {
  name: 'PluginGoogleAds',
  type: 'collect',
  execute: () => {
    console.log('Executing Plugin Google Ads');
  }
};