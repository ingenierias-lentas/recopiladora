import { gql, request } from 'graphql-request'

const collectData = async function () {
  const response = await request('http://engine:3000/graphql', gql`
    query MyQuery {
      getGoogleAdsCampaign(customerId: "4524698454", managerId: "6036584176") {
        results {
          campaign {
            id
            name
            resourceName
          }
        }
      }
    }
  `)

  return { response }
}

const services = { collectData }

export default services
