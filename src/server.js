import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { routes } from "./todos/routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({
    limit: "100mb"
}));

// untuk router (pemetaan url)
app.use(routes)

const PORT = process.env.PORT 
app.listen(PORT,() => console.info(`
        ====================
        Running PORT: ${PORT}
        ====================
    `)
);
