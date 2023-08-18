import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "your are not authorized" });
  }
  //   decrypt the token

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: "invalid token" });
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  authMiddleware(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else
      res
        .status(401)
        .json({ success: false, message: "your are not authenticated" });
  });
};
export const verifyAdmin = (req, res, next) => {
  authMiddleware(req, res, next, () => {
    if (req.user.role === "admin") {
      next();
    } else
      res
        .status(401)
        .json({ success: false, message: "your are not authorized" });
  });
};
