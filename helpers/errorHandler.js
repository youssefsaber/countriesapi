function errorHandler(err, req, res, next) {
  console.log('[Error]', err);
  if (typeof err === 'string') {
    return res.status(400).json({
      message: err,
      status: 400
    });
  }
  return res.status(400).json(err);
}
module.exports = errorHandler;
