import { User } from "../models/User.js";
import { comparePassword, hashPassword } from "../utils/authUtils.js";
import { generateToken } from "../utils/jwtUtils.js";

export async function signup(req, res) {
  const { fullName, email, password } = req.body;
  try {
    // hash password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    const token = generateToken(newUser._id);
    res.json({ token });
  } catch (err) {
    if (err.message.includes("duplicate key error"))
      return res.status(400).json({ error: "Email already in use" });
    res.status(401).json({ error: err.message });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  console.log(req.body);

  // Check if user exists
  if (user) {
    const passwordIsCorrect = await comparePassword(password, user.password);

    // Check if password is correct
    if (passwordIsCorrect) {
      try {
        const token = generateToken(user._id);
        res.json({ token });
      } catch (err) {
        res.status(401).json({ error: err.message });
      }
    } else {
      res.status(401).json({ error: "Username or Password incorrect" });
    }
  } else {
    res.status(401).json({ error: "Username or Password incorrect" });
  }
}

export async function changePassword(req, res) {
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.userId);
  const passwordIsCorrect = await comparePassword(oldPassword, user.password);
  if (passwordIsCorrect) {
    user.password = await hashPassword(newPassword);
    await user.save();
    res.json(user);
  } else {
    res.json({ error: "Incorect Password" });
  }
}
