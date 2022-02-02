import { errors } from "celebrate";
import express from "express";
import swaggerUi from "swagger-ui-express";

import routes from "./src/routes";
import { swaggerDocument } from "./src/swagger";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(routes);

app.use(errors());

app.listen(3333, () => console.log("Server is running!"));
