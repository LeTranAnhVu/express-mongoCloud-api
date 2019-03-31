import mongoose from 'mongoose';

const schema = mongoose.Schema;

const Todo = new schema({
    id: mongoose.Schema.ObjectId,
    name: {type: String, required: true},
    status: {type: Boolean, default: false},
    dateCreated: {type: Date, default: Date.now()}
});

export default mongoose.model('todo',Todo);