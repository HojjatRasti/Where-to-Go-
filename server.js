import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJsonRespond } from './utils/sendJsonResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'

const PORT = 8000

const server = http.createServer( async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const queryObj = Object.fromEntries(urlObj.searchParams)

  if(urlObj.pathname === '/api' && req.method === 'GET'){

    let filterDestinations = getDataByQueryParams(destinations, queryObj)

    sendJsonRespond(res, 200, filterDestinations)

  }else if (req.url.startsWith('/api/continent') && req.method === 'GET'){
    const continent = req.url.split('/').pop()
    const filterData = getDataByPathParams(destinations, 'continent', continent )

    sendJsonRespond(res, 200, filterData)
    
  }else if(req.url.startsWith('/api/country')){
    const country = req.url.split('/').pop()
    const filterData = getDataByPathParams(destinations, 'country', country )

    sendJsonRespond(res, 200, filterData)

  }else{

    sendJsonRespond(res, 404, {
      error:'not found',
      message: 'The request route does not exist'
    } )
    
  }
})

server.listen(PORT, () => console.log(`server running on: http://localhost:${PORT}`))