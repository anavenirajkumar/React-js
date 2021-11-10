const mongoose  = require('mongoose');

let UserSchema = new mongoose.Schema({
    name : { type : String , require : true },
    email : { type : String , require : true, unique : true},
    password : { type : String , require : true},
    avatar : { type : String , require: true},
    isAdmin : { type : Boolean , default : false},   // Boolean and Admin Default False
    address : {
        flat : {type : String , required : true},
        street : {type : String , required : true},
        landmark : {type : String , required : true},
        city : {type : String , required : true},
        state : {type : String , required : true},
        country : {type : String , required : true},
        pin : {type : String , required : true},
        mobile : {type : String , required : true}
      },
      created : {type : Date , default : Date.now()}
});
let User = mongoose.model('user' , UserSchema);
module.exports = User