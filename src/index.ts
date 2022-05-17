import Logger from "./utils/logger";
import app from "./app";
import { AppDataSource } from "./config/appDataSource";

const PORT: string | number = process.env.PORT || 3002;

AppDataSource.initialize()
    .then(() => {
        Logger.info("Database connected.");
    })
    .catch((err: string) => {
        Logger.error("ERROR - Unable to connect to the database:", err);
    });


app.listen(PORT, () => {
    Logger.info("App is listening on port 3000!");
});