import todoCtrl from '../../../../controller/modelController/todo';

export default function(req, res, next){
  if(req.body && req.body.ids && req.body.ids.length !== 0){
    todoCtrl.delete(req.body.ids)
      .then(()=>{
        res.status(200).json({status: 200, message: 'Delete successfully'})
    }).catch(err=>{
      next({status: 404, message: 'Invalid Id', error: err});
    })
  }else {
    next({status: 404, message: 'Id should be pass as array'});
  }
}
