const fetch = require('node-fetch')
const Promise = require('bluebird')
const base64 = require('base-64')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { endpoints, basicAuth } = configOptions

  delete configOptions.plugins // Gatsby adds a configOption that's not needed for this plugin, delete it

  const customFormat = str => {
    const newString = str.includes('?')
      ? str.substring(0, str.indexOf('?'))
      : str
    return newString
      .replace(/^.*\/\/[^\/]+/, '') // Removes domain
      .replace('rest', '')
      .replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()) // Capitalizes strings
      .replace(/\//g, '') // Removes slashes
      .replace(/\-+/g, '') // Removes hyphens
      .replace(/\s+/g, '') // Removes spaces
  }

  const processResult = (result, endpoint) => {
    const nodeId = createNodeId(`${endpoint}-${result.uid}`)
    const nodetype = customFormat(endpoint)
    const nodeContent = JSON.stringify(result)
    const nodeData = {
      ...result,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `node${nodetype}`,
        content: nodeContent,
        contentDigest: createContentDigest(result),
      },
    }
    return nodeData
  }

  const sources = []
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (typeof basicAuth !== 'undefined') {
    const auth = `Basic ${base64.encode(
      `${basicAuth?.username}:${basicAuth?.password}`
    )}`
    options.headers.Authorization = auth
  }
  endpoints.forEach(endpoint =>
    sources.push(
      fetch(`${endpoint}`, options)
        .then(response => {
          return response.json()
        })
        .then(data => {
          const nodes = data?.nodes || []

          nodes.map(node => {
            const nodeData = processResult(node, endpoint)
            createNode(nodeData)
            return true
          })
          return true
        })
    )
  )
  return Promise.all(sources)
}
