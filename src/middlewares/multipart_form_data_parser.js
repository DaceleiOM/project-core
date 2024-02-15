const multer = require('multer')
const SIZE_LIMIT = 5 * 1024 * 1024 // 5MB

const multipartFormDataParser = multer({
  storage: multer.memoryStorage(),
  // increase size limit if needed
  limits: { fieldSize: SIZE_LIMIT },
  // support firebase cloud functions
  // the multipart form-data request object is pre-processed by the cloud functions
  // currently the `multer` library doesn't natively support this behaviour
  // as such, a custom fork is maintained to enable this by adding `startProcessing`
  // https://github.com/emadalam/multer
  startProcessing (req, busboy) {
    req.rawBody ? busboy.end(req.rawBody) : req.pipe(busboy)
  }
})

module.exports = multipartFormDataParser
