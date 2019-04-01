import todoCtrl from '../../../../controller/modelController/todo';

export default function(req, res, next){
    // let query = {dateCreated: {$gte: new Date('2009/02/12'), $lte: Date.now()}};
    // let sort = {  name: -1 }
    let query = null;
    let sort = null;
      todoCtrl.getAll(query, sort).then(todos=>{
        res.status(200).json({data: todos});
    }).catch(err=>{
        next({status: 500, message: 'server error', error: err});
    })
}
