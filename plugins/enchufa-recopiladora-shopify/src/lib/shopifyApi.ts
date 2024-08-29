import 'dotenv/config'
import '@shopify/shopify-api/adapters/node';
import {shopifyApi, ApiVersion} from '@shopify/shopify-api';
//import {restResources} from '@shopify/shopify-api/rest/admin/2024-07';

export const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || '',
  scopes: ['read_products'],
  hostName: process.env.SHOPIFY_ADMIN_API_URL || '',
  apiVersion: ApiVersion.July24,
  isEmbeddedApp: false,
  //restResources,
});