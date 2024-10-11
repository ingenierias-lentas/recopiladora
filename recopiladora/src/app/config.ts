const getPort = function (): number {
  return Number(process.env.PORT) || 3001;
}

const getApiHost = function (): string {
  return process.env.API_HOST || 'localhost'
}

const getApiUrl = function (): string {
  const host = process.env.API_HOST || 'localhost'
  return `http://${host}:${getPort()}`
}

export { getApiUrl, getPort, getApiHost }