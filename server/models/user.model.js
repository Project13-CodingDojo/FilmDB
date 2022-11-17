const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"First name is required"]
    },
    lastname:{
        type:String,
        required:[true,"Last name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8,"Password must be at least 8 characters long"]
    }
},{timestamps:true})

// UserSchema.virtual('confirmPassword')
// .get(()=>this._confirmPassword)
// .set(value=>this._confirmPassword = value)

// UserSchema.pre('validate',function(next){
//     if(this.password !== this.confirmPassword){
//         this.invalidate('confirmPassword','Password must match confirm password')
//     }
//     next()
// })

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        this.password = hashedPassword
        next()
    }catch{
        console.log('Error in Save',error)
    }
})



module.exports = mongoose.model("User",UserSchema)