// IMPORTS
const  express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const handleError = require("./src/utils/handleError");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./src/doc/swagger");

// INICIALIZATIONS
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(handleError);

// ROUTES
app.use("/api/v1/", require("./src/routes"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// SERVER RUNNING
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
});