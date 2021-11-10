const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');

// configure cors with express //
app.use(cors());

// configure express to accept form data //
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// configure dotEnv //
dotEnv.config({path : './config/config.env'});

const port = 5000 || process.env.PORT;

// connect to Mongo DB //
mongoose.connect(process.env.MONGODB_LOCAL_URL, {
    useUnifiedTopology : true,  // for server console errors //
    useNewUrlParser : true,     // for server console errors //
    useFindAndModify : false,    // for server console errors //
    useCreateIndex : true      // for server console errors //
}).then((responce)=> {
   console.log('Connected to Mongo DB Successfully.........');
}).catch((error)=> {
 console.error(error);
 process.exit(1);  // stops the node js process //
});

// basic to Port //
app.get('/',(request, responce) => {
    responce.send(`<h2>Welcome to BrainsKart Application Express Server</h2>`);
});

// listen to Port //
// http://127.0.0.1:5000 //
app.listen(port, () => {
    console.log(`Express Server is started : ............`);
});

/// Router Configuration ///
app.use('/user', require('./router/userRouter'));
app.use('', require('./router/user'));

