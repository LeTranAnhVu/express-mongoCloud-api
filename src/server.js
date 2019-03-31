import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
const app = express();
import  {URI} from './config/mongoCloud';

// connect to database
mongoose.connect(URI, {useNewUrlParser: true}).then(()=> {
    console.log('Database connect successfully');
}).catch(()=>{
    console.log('fail to connect with mongodb cloud')
});

// serve static file
app.use(express.static(path.join(__dirname, 'public')));

//______________________Middleware__________________________
// body parse
import bodyParser from 'body-parser';
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// set all res is json
import {jsonType} from "./middleware";
app.use(jsonType);

//______________________Router __________________________
import router from './router'
app.use('/',router);



// error handler
app.use((err, req, res, next) =>{
    if(err) res.status(err.status).json({status: err.status, message: err.message, err: err.error});
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is start !!`);
});

