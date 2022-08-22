import express from "express";
import bodyParser from "body-parser";

import routes from "./routes/users.js";

const app = express();
const PORT = 8081;

app.use(bodyParser.json());

app.use("/users", routes);

app.listen(PORT, () => console.log("Server is running"));
