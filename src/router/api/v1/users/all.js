import userCtrl from '../../../../controller/modelController/user';
export default function (req, res, next){
    userCtrl.getAll().then((users)=>{
        res.status(200).json({data: users});
    }).catch(err=>{
        next({status: 500, message: 'server error', error: err});
    })
}
