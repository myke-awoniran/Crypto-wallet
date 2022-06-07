const { Factory } = require('../utils/factory/factory');
const User = require('../database/models/admin');
const {
    response,
    dumbUser,
    signToken,
    verifyToken,
} = require('../utils/helper');
const AppError = require('../errors/operational');

const projection = {
    _id: true,
    password: true,
    email: true,
    firstName: true,
    lastName: true,
    joinedAt: true,
};
exports.HttpSignUp = async (req, res, next) => {
    const emailDomain = req.body.email.split('@')[1];
    if (emailDomain !== 'pinbar.co')
        return next(
            new AppError(
                `you're not allowed to create an account, contact support`,
                400
            )
        );
    const newUser = await new Factory(User).create(req.body);
    response(res, 201, dumbUser(newUser));
};

exports.HttpLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const emailDomain = email.split('@')[1];
    if (!email || !password)
        return next(new AppError('provide username and password', 400));
    if (emailDomain !== 'pinbar.co')
        return next(new AppError(`you're not allowed to login`, 400));
    const user = await new Factory(User).findOne({ email }, projection);
    if (!user || !(await user.comparePassword(password, user.password)))
        return next(new AppError('invalid username or password', 400));
    response(res, 200, dumbUser(user), signToken(user._id));
};

exports.HttpCheckLogin = async (req, res, next) => {
    let token;
    if (req.headers && req.headers.authorization) {
        token = req.headers.authorization.split(' ')[1];
    }
    console.log(token);
    if (!token)
        return next(new AppError(`you're not logged in, login to access`, 400));
    const payload = verifyToken(token, process.env.JWT_SECRET);
    console.log(payload);
    const currentUser = await new Factory(User).findOne({ _id: payload.id });
    console.log(currentUser);
    if (!currentUser)
        return next(new AppError('there is no user with the  provided token'));
    req.user = currentUser;
    next();
};
