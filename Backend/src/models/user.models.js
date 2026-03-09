import mongoose, { Mongoose, Schema } from "mongoose";

const productSchema = new Schema(
    {
      name : {
        type : String,
        require: true,
      },
      username : {
        type : String,
        require : true,
        index : true,
        unique : true

      },
      email :{
         type : String,
         require : true,
         index : true,
         unique : true
      },
      password :{
         type : String,
         require : true,
         min : 8
      },
      profile : {
        type : String , //cloudinary
      }

    },
    {timestamps : true})
     
    userSchema.pre('save', async function (next) {
      if (!this.isModified("password")) return next();
      this.password = await bcrypt.hash(this.password, 10);
      next() 
    })

    userSchema.methods.isPasswordCorrect= async function (password) {
      return await bcrypt.compare(password, this.password)
    }
     
    const User = Mongoose.models('User', userSchema)

