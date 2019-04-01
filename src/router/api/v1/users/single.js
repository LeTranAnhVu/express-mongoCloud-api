import userCtrl from '../../../../controller/modelController/user';
export default function (req, res, next){
    const id = req.params.id;
    userCtrl.getOneById(id).then((user)=>{
        res.status(200).json({data: user});
    }).catch(err=>{
        next({status: 404, message: 'resource not found', error: err});
    })
}
