const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        select: false,
        required: true,
    },
    joinedAt: {
        type: Date,
        default: Date.now,
    },
});

adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
        this.passwordConfirm = undefined;
    }
    next();
});

adminSchema.methods.comparePassword = async function (password, userPassword) {
    return await bcrypt.compare(password, userPassword);
};

module.exports = model('User', adminSchema);
