const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(403).json({message: 'No token. No auth.'});
    }

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        const token = req.headers.authorization.split(" ")[1]; // gives ['Bearer', '321j321oj']
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) {
                return res.status(403).json({message: 'Wrong or Expired token'});
            } else {
                req.user = data
                next()
            }
        })
    }
}

module.exports = verifyToken;