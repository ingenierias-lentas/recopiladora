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

  const currentDate = (new Date()).toLocaleString('en-US', { timeZone: 'America/Los_Angeles', timeZoneName: 'short' })

  const campaigns = response.getGoogleAdsCampaign[0].results.map(campaign => {
    return {
      campaignId: campaign.campaign.id,
      customerId: '4524698454',
      name: campaign.campaign.name,
      createdAt: currentDate,
    }
  })

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
