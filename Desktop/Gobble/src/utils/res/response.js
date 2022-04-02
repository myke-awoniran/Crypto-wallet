function response(res, statCode, status, data, token) {
  res.status(statCode).json({
    status,
    token,
    data,
  });
}

module.exports = response;
