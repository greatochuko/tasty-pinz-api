import { User } from "../models/User.js";
import { verifyToken } from "../utils/jwtUtils.js";

export function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const { id } = verifyToken(token);
    req.userId = id;
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
