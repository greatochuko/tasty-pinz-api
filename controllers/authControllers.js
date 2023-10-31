import { User } from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/authUtils.js";
import { generateToken } from "../utils/jwtUtils.js";

export async function signup(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    // Create new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const token = generateToken(newUser._id);
    res.json({ token });
  } catch (err) {
    res.json({ error: err.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Check if user exists
  if (user) {
    const passwordIsCorrect = await comparePassword(password, user.password);

    // Check if password is correct
    if (passwordIsCorrect) {
      try {
        const token = generateToken(user._id);
        res.json({ token });
      } catch (err) {
        res.json({ error: err.message });
      }
    } else {
      res.json({ error: "Username or Password incorrect" });
    }
  } else {
    console.log("user doesn't exists");
    res.json({ error: "Username or Password incorrect" });
  }
}
