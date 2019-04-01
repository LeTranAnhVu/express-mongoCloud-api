import todoCtrl from '../../../../controller/modelController/todo';
export default function(req, res, next){
    if(req.body.data && req.body.data.name){
        const dummy = {
            name: req.body.data.name,
            status: req.body.data.status ? req.body.data.status: false,
            dateCreated: new Date('2010/02/12')
        };
        todoCtrl.create(dummy).then(todo=>{
            res.status(200).json(todo);
        }).catch(err=>{
            next({status: 500, message: 'Cannot create todo', error: err})
        })
    }else {
        next({status: 404, message: 'Invalid data'})
    }

}
