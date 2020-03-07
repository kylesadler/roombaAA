var mongoose = require('mongoose');

//Connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true });


//On Connect
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database MongoDB');
});

//On Error
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('Error in Database connection: '+err);
    }
});

module.exports = mongoose.connection;