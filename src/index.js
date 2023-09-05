const express = require('express');
const v1assetRouter = require('./v1/routes/assetRoutes');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const corsOption = {
    origin: "http://localhost:4200"
}

app.use(express.json());
app.use(cors(corsOption));
app.use("/pedidos/v1", v1assetRouter)

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
