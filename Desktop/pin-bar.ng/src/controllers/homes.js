const { response } = require('../utils/helper');
const AppError = require('../errors/operational');

exports.HttpHome = (req, res) => {
   response(res, 200, 'welcome pinbar to api');
};

exports.undefinedRoutes = (req, res, next) => {
   return next(
      new AppError(
         `can't find this ${req.originalUrl} on this server \n check the url with the correct HTTP method and try again`,
         404
      )
   );
};

exports.HttpGetHomes = (req, res, next) => {};
exports.HttpPostNewHome = (req, res, next) => {};
