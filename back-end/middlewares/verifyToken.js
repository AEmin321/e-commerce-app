import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("Your token is not valid.");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Authentication error.");
  }
};

export const userAuthorization = (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.id === req.params.id || req.user.idAdmin) {
      next();
    } else {
      res.status(403).json("You don't have permission to do that.");
    }
  });
};
