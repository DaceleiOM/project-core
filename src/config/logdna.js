const Logger = require('logdna')
const options = {
  hostname: 'adomi-core',
  app: 'adomi',
  env: process.env.DB_CONNECTION_NAME
    ? 'production'
    : 'development'
}

// Defaults to false, when true ensures meta object will be searchable
options.index_meta = true

// Add tags in array or comma-separated string format:
options.tags = ['logging', 'nodejs', 'logdna', 'core']

// Create multiple loggers with different options
const logger = Logger.createLogger('227faa59f31a70b7a81bdc444783f1f9', options)

module.exports = logger
