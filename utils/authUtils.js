import bcrypt from "bcryptjs";

export async function hashPassword(rawPassword) {
  return await bcrypt.hash(rawPassword, 10);
}

export async function comparePassword(password, hashedPassword, cb) {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
}
