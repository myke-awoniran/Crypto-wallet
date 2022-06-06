function errorHandler(err, req, res, next) {
   res.status(err.statusCode).json({
      status: err.status,
      err,
      message: err.message,
   });
}
module.exports = errorHandler;
