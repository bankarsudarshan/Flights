const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// you are going to redirect all the request for /api to the apiRoutes router
// this apiRoutes router is implemented in the routes folder and you'll have to import it as you did it in LINE 2
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log("server started running on port", ServerConfig.PORT);
});
