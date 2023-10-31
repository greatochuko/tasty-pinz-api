import { User } from "../models/User.js";
import { hashPassword } from "../utils/authUtils.js";

export async function signup(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.json(newUser);
  } catch (err) {
    res.json({ error: err.message });
  }
}
