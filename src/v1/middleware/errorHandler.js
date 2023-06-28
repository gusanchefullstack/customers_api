function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }
  else {
    next(error);
  }
}

module.exports = { boomErrorHandler };
