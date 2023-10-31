import bcrypt from "bcryptjs";

export async function hashPassword(rawPassword) {
  return await bcrypt.hash(rawPassword, 10);
}
