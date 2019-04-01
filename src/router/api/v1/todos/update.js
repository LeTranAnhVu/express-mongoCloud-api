import todoCtrl from '../../../../controller/modelController/todo';

export default function(req, res, next){
  if(req.body && req.body.data){
    todoCtrl.edit(req.params.id, req.body.data)
      .then(newData =>{
        res.status(200).json({data: newData})
    }).catch(err=>{
      next({status: 500, message: 'Server error', error: err});
    })
  }else {
    next({status: 404, message: 'Invalid data'})
  }
}
