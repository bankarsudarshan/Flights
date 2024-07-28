const info = (req, res) => {
    return res.status(200).json({
        success: true,
        msg: "API is live",
        error: {},
        data: {},
    });
};

module.exports = { info };
