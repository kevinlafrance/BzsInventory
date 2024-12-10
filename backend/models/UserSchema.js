const mongoose=require("../configuration/dbConfig");

const UserSchema = new mongoose.Schema(
    {
        email:  {
            type: String, 
            unique: true
            },
        firstname: String,
        lastname: String, 
        role:   {
            type:String, 
            enum:["admin", "basic"], 
            default: "basic" 
            }
    }, 
    {  
        collection: "users",
    }
); 
module.exports = mongoose.model('User', UserSchema);