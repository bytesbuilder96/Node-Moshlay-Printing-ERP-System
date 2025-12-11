import { User } from "../models.js/user.model.js";

// ╔═══════════════════════════════════╗
// ║     Create Default Admin User     ║
// ╚═══════════════════════════════════╝

export const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await User.findOne();
    if (existingAdmin) {
      console.log("Admin already Exists");
      return;
    }
    const fullName = process.env.ADMIN_FULL_NAME;
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if (!fullName || !email || !password) {
      throw new Error(
        "Admin credentials are not defined in environment variables."
      );
    }
    await User.create({
      fullName,
      email,
      password,
      role: "Admin",
    });
    console.log("Default admin user created successfully");
  } catch (error) {
    console.log("Error Creating default admin: ", error);
    throw error;
  }
};
