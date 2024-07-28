// from this, we are actually going to export a router object
// in this router object, all the /api driven routes should be mentioned

const express = require("express");
const router = express.Router();
const v1Routes = require("./v1");

router.use("/v1", v1Routes);

module.exports = router;
