const isProd = process.env.NODE_ENV === 'production'

const basePath = isProd ? '/jwt-forge' : ''

export default basePath
