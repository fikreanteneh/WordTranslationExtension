import app from "./app";
import * as db from "./config/database";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const PORT = process.env.PORT || 3333;
db.connect().then(() => {
    app.listen(PORT, async () => {
        console.log(`Server is running http://localhost:${PORT}`);
    });
    
}).catch((e) => {
    console.log(`Db Error: ${e.message}`)
})

