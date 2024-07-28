const express = require("express");
const router = express.Router();

router.get("/info", (req, res) => {
    return res.status(200).json({
        msg: "OK!!!",
    });
});

module.exports = router;
