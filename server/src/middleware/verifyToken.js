const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
    try {
        const authHeader = req.headers.token;
        if (!authHeader) {
            return res.status(401).json({ error: "You are not authenticated" });
        }

        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.PASS_SEC, (err, user) => {
            if (err) {
                return res.status(403).json({ error: "Token is not valid" });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = verify;
