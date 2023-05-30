function catchedAsync(fn) {
  return function (req, res, next) {
    fn(req, res).catch(error => {
      next(error);
    });
  };
}

module.exports = catchedAsync;
