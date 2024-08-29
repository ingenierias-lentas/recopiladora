import { GraphqlClient } from '@shopify/shopify-api';

export const collectData = async (graphqlClient: GraphqlClient) => {
    console.log('Collecting data from Shopify');
    const query = `
        {
            products(first: 10) {
            edges {
                node {
                title
                description
                id
                }
            }
            }
        }
        `;
    const data = await graphqlClient.query({data: query});
}