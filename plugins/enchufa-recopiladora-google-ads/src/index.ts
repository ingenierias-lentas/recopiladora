import { Plugin, PluginType } from '@ingenierias-lentas/types';

export const PluginGoogleAds: Plugin = {
  name: 'PluginGoogleAds',
  type: PluginType.Collect,
  execute: () => {
    console.log('Executing Plugin Google Ads');
  }
};