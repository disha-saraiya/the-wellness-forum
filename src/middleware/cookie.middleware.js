const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const wdt = req.cookies.webdevtoken;

    if (!wdt) {
        return res.status(401).send("No valid web dev token given")
    } else {
        jwt.verify(wdt, 'scented_candle', function(error, decoded_token) {
            if (error) {
                return response.status(401).send("Unauthorized: No valid token");
            } else {
                req.username = decoded_token.username;
                req.id = decoded_token.id;
                next();
            }
        })
    }
}