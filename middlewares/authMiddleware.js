import { verifyToken } from "../utils/jwtUtils.js";

export function authenticate(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    verifyToken(token);
    next();
  } catch (err) {
    res.json({ error: err.message });
  }
}
