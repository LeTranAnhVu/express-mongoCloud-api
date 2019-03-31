import todoCtrl from '../../controller/modelController/todo';

export default function(req, res, next){
    const id = req.params.id;
    todoCtrl.getOneById(id).then(todo=>{
        res.status(200).json({data: todo});
    }).catch(err=>{
        next({status: 404, message: 'resource not found', error: err});
    })
}