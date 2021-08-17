const jwt = require("jsonwebtoken");
const config = process.env;

const ValidateToken = (req, res, next) => {

    const Token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!Token)
        res.status('403').end('Token is required for auth');

    try {
        const decoded = jwt.verify(Token, config.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = ValidateToken;