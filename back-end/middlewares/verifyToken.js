import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const authToken = req.headers.token;

  if (authToken) {
    const token = authToken.split(" ")[1];
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
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You don't have permission to do that.");
    }
  });
};

export const userAdminAuthorization = (req, res, next) => {
  verifyUser(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You don't have permision to do that.");
    }
  });
};
