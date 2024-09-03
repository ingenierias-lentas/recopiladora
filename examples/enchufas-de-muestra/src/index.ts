// src/index.ts
import { Manager } from '@recopiladora/base';
import { PluginShopify } from '@recopiladora/enchufa-recopiladora-shopify';
// import { PluginBigquery } from '@recopiladora/enchufa-recopiladora-bigquery';
// import { PluginGoogleAds } from '@recopiladora/enchufa-recopiladora-google-ads';
// import { PluginMetaBusiness } from '@recopiladora/enchufa-recopiladora-meta-business';
// import { PluginPostgresql } from '@recopiladora/enchufa-recopiladora-postgresql';

const pluginManager = new Manager();
pluginManager.loadPlugin(PluginShopify);
// pluginManager.loadPlugin(PluginMetaBusiness);
// pluginManager.loadPlugin(PluginGoogleAds);
// pluginManager.loadPlugin(PluginBigquery);
// pluginManager.loadPlugin(PluginPostgresql);
pluginManager.startServer();