import { gql, request } from 'graphql-request'

type CampaignDataResponse = {
  getGoogleAdsCampaign: Array<{
    results: Array<{
      campaign: {
        id: string,
        name: string,
        resourceName: string
      }
    }>
  }>
}

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
  `) as CampaignDataResponse

  console.log("response:", response)

  const campaigns = response.getGoogleAdsCampaign[0].results.map(campaign => {
    return {
      campaignId: campaign.campaign.id,
      customerId: '4524698454',
      name: campaign.campaign.name,
    }
  })

  // return campaigns
  // const campaigns = [{
  //   "campaignId": "21776180636",
  //   "customerId": "4524698454",
  //   "name": "Test-Sales-Search-1",
  // }]

  return await request('http://engine:3000/graphql', gql`
    mutation MyMutation($objects: [V2InsertCampaignsObjectInput!]!) {
      v2InsertCampaigns(objects: $objects, postCheck: {}) {
        affectedRows
      }
    }
  `, { objects: campaigns })
}

const services = { collectData }

export default services
