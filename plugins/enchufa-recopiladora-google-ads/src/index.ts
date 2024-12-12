import { Plugin, PluginType } from '@ingenierias-lentas/recopiladora-types';

export const PluginGoogleAds: Plugin = {
  name: 'PluginGoogleAds',
  type: pluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Google Ads');
  }
};