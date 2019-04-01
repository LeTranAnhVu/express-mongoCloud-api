import todoCtrl from '../../../../controller/modelController/todo';
export default function(req, res, next){
    const dummy = {
        name: req.body.name,
        status: req.body.status ? req.body.status: false,
    };
    todoCtrl.create(dummy).then(todo=>{
        res.status(200).json(todo);
    }).catch(err=>{
        next({status: 500, message: 'Cannot create todo', error: err})
    })
}
