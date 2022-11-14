const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/filmdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("connected to film  data")

}).catch((err)=>{
    console.log(err)
})