import todoCtrl from '../../controller/modelController/todo';

export default function(req, res, next){
    todoCtrl.getAll().then(todos=>{
        res.status(200).json({data: todos});
    }).catch(err=>{
        next({status: 500, message: 'server error', error: err});
    })
}