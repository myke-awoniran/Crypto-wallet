const Mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = Mongoose.Schema(
   {
      first_name: {
         type: String,
         trim: true,
         required: [true, 'first_name is required'],
      },
      last_name: {
         type: String,
         trim: true,
         required: [true, 'last_name is required'],
      },
      user_name: {
         type: String,
         trim: true,
         unique: true,
         required: [true, 'user_name is required'],
      },
      email: {
         type: String,
         required: [true, 'email is required'],
         unique: [true, 'duplicate email'],
      },
      password: {
         type: String,
         trim: true,
         required: true,
      },

      plan: {
         enum: ['basic', ''],
      },
   },
   {
      timestamps: true,

      toObject: {
         virtuals: true,
      },

      toJSON: {
         virtuals: true,
      },
   }
);

UserSchema.pre('save', async function (next) {
   if (this.isModified('password')) {
      this.passwordConfirm = undefined;
      this.password = await bcrypt.hash(this.password, 10);
   }
   next();
});

UserSchema.methods.comparePassword = async function (
   userPassword,
   OriginalPassword
) {
   return await bcrypt.compare(userPassword, OriginalPassword);
};
const userModel = Mongoose.model('User', UserSchema);

module.exports = userModel;
