import mongoose from 'mongoose';
import domain from '../config/domain';
// create the schema

const schema = mongoose.Schema;

// define the model
const User = new schema({
    id : mongoose.Schema.ObjectId,
    name: { type: String, default: 'noname'},
    age: Number,
    avatar: {type: String, default: `${domain}/img/logo-user-default.png`},
    job: String,
    salary: Number,
    dateCreated: {type: Date, default: Date.now}
});

// access model

export default mongoose.model('Useeer', User);
