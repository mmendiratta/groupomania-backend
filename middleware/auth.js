import { verify } from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = verify(token, "JWT_TOKEN");
    const userId = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userId) {
      // eslint-disable-next-line no-throw-literal
      throw "Invalid User ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("invalid request")
    });
  }
};
