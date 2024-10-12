import("node-fetch");

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello ${name ?? "world"}`;
}

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function goodDay(name?: string) {
  return `good day to you, ${name ?? "world"}`;
}

type Planet = {
  "name": string
  "rotation_period": string
  "orbital_period": string
  "diameter": string
  "climate": string
  "gravity": string
  "terrain": string
  "surface_water": string
  "population": string
  "residents": Array<string>
  "films": Array<string>
  "created": string
  "edited": string
  "url": string
}

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export async function getPlanetById(id: string): Promise<Planet> {
  const result = await fetch(`https://swapi.dev/api/planets/${id}/`)
  const json = (await result.json()) as Planet
  return json
}

type Author = {
  first: string
  last: string
}

type Todo = {
  id: number
  name: string
  content: string
  author: Author
}

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export async function getTodoById(id: string): Promise<Todo> {
  const result = await fetch(`http://host.docker.internal:5001/todos/${id}`)
  const json = (await result.json()) as Todo
  return json
}

type GoogleAdsCampaignResponse = Array<{
  "results": Array<{
    "campaign": {
      "resourceName": string,
      "networkSettings": {
        "targetContentNetwork": boolean
      },
      "name": string,
      "id": string,
    }
  }>,
  "fieldMask": string,
  "requestId": string,
  "queryResourceConsumption": string,
}>


/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export async function getGoogleAdsCampaign(
  customerId: string,
  managerId: string,
): Promise<GoogleAdsCampaignResponse> {
  const accessTokenResponse = await fetch('https://www.googleapis.com/oauth2/v3/token', {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'refresh_token',
      client_id: process.env.CLIENT_ID as string,
      client_secret: process.env.CLIENT_SECRET as string,
      refresh_token: process.env.REFRESH_TOKEN as string,
    })
  })

  const { access_token: accessToken } = (await accessTokenResponse.json()) as { access_token: string }

  const result = await fetch(`https://googleads.googleapis.com/v17/customers/${customerId}/googleAds:searchStream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'developer-token': process.env.DEVELOPER_TOKEN as string,
      'login-customer-id': managerId,
    },
    body: JSON.stringify({
      "query": "SELECT campaign.id, campaign.name, campaign.network_settings.target_content_network FROM campaign ORDER BY campaign.id"
    })
  })
  return (await result.json()) as GoogleAdsCampaignResponse
}