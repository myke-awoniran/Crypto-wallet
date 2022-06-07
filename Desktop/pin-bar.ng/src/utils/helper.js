const jwt = require('jsonwebtoken');
function response(res, statusCode, data, token) {
    res.status(statusCode).json({
        status: 'success',
        data,
        token,
    });
}

function dumbUser(userObject) {
    return {
        id: userObject._id,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        joinedAt: userObject.joinedAt,
    };
}

function signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES,
    });
}

function verifyToken(id) {
    return jwt.verify(id, process.env.JWT_SECRET);
}

module.exports = {
    response,
    dumbUser,
    signToken,
    verifyToken,
};
