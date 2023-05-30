function characterValidation(req, res, next) {
  const { name } = req.body;
  if (name) return next();
  else throw new ClientError("No name defined", 401);
}
