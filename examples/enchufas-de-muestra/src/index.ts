// src/index.ts
import { Manager } from '@ingenierias-lentas/base';
import { PluginShopify } from '@ingenierias-lentas/enchufa-recopiladora-shopify';
// import { PluginBigquery } from '@ingenierias-lentas/enchufa-recopiladora-bigquery';
// import { PluginGoogleAds } from '@ingenierias-lentas/enchufa-recopiladora-google-ads';
// import { PluginMetaBusiness } from '@ingenierias-lentas/enchufa-recopiladora-meta-business';
// import { PluginPostgresql } from '@ingenierias-lentas/enchufa-recopiladora-postgresql';

const pluginManager = new Manager();
pluginManager.loadPlugin(PluginShopify);
// pluginManager.loadPlugin(PluginMetaBusiness);
// pluginManager.loadPlugin(PluginGoogleAds);
// pluginManager.loadPlugin(PluginBigquery);
// pluginManager.loadPlugin(PluginPostgresql);
pluginManager.startServer();