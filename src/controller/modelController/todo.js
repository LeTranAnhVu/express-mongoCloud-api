import Todo from '../../model/todo';

export default {
    getAll: function (){
        return new Promise((resolve, reject)=>{
            Todo.find({}, (err, todos)=>{
                err ? reject(err) : resolve(todos);
            });
        });
    },
    getOneById: function (id){
        return new Promise((resolve, reject)=>{
            Todo.findById(id, (err, todo)=>{
                err ? reject(err) : resolve(todo);
            });
        });
    },
    create: function(data){
        return new Promise((resolve, reject) =>{
            let todo = new Todo(data);
            todo.save((err, todo) => { err ? reject(err): resolve(todo)})
        })
    }
}