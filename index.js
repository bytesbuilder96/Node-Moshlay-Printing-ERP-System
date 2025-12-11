import "dotenv/config";
import { connectDB } from "./src/config/db.config.js";
import { app } from "./src/app.js";
import { createDefaultAdmin } from "./src/utits/createAdmin.util.js";

const serverStart = async () => {
  try {
    await connectDB();
    await createDefaultAdmin();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Start Successfuly on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Server Not Start Due to some error");
  }
};

serverStart();
