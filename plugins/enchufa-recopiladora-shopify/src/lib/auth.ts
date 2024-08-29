import crypto from 'crypto';
import { safeCompare } from '@shopify/shopify-api/dist/ts/lib/auth/oauth/safe-compare';

import { removeHMAC } from './query';

export const validateHMAC = (url: string, secret: string): boolean => {
    let parsedUrl: string, hmac: string;
    [parsedUrl, hmac] = removeHMAC(url);

    // Create the HMAC digest
    const digest = crypto.createHmac('sha256', secret)
    .update(parsedUrl)
    .digest('hex');

    const isValid = safeCompare(digest, hmac);
    return isValid;
}