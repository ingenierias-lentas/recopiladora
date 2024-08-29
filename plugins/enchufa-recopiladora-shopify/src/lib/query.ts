import qs from 'qs';

function alphabeticalSort(a: string, b: string) {
    return a.localeCompare(b);
}

export const removeHMAC = (url: string): [string, string] => {
    let parsed = qs.parse(url);
    let hmac: string = ''
    if (typeof parsed.hmac === 'string') {
        hmac = parsed.hmac;
    }
    delete parsed.hmac;
    return [qs.stringify(parsed, { sort: alphabeticalSort }), hmac];
}