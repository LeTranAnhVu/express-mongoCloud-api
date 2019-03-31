import User from '../../model/user';

export default {
    createNewOne: function(data){
        return new Promise((resolve, reject) => {
            let user = new User(data);
            // save
            user.save((err)=> {
                err ? reject(err) : resolve();
            })
        })
    },
    getAll: function(){
        return new Promise((resolve, reject)=>{
            User.find({}, (err, users)=>{
                err ? reject(err): resolve(users);
            })
        })
    },
    getOneById: function(id){
        return new Promise((resolve, reject)=>{
            User.findById(id, (err, user)=>{
                err ? reject(err) : resolve(user);
            })
        })
    }
}