import dotenv from "dotenv";
dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    testServerUrl: process.env.TEST_SERVER_URL || "http://test-server/api",
};
