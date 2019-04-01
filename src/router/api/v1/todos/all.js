import todoCtrl from '../../../../controller/modelController/todo'
import utils from '../../../../utils'

export default function (req, res, next) {
  let {name, fromDate, toDate} = req.query
  name = (name && (name.trim() !== '')) ? new RegExp(name) : undefined
  fromDate = utils.isGoodDate(fromDate) ? new Date(fromDate) : undefined
  toDate = utils.isGoodDate(toDate) ? new Date(toDate) : undefined
  let query = {};
  if (name) query.name = name
  if (fromDate) {
    query.dateCreated ?  query.dateCreated.$gte = fromDate:  query.dateCreated = {$gte: fromDate};
  }
  if (toDate) {
    query.dateCreated ?  query.dateCreated.$lte = toDate:  query.dateCreated = {$lte: toDate};
  }

  let sort = null;
  todoCtrl.getAll(query, sort).then(todos => {
    res.status(200).json({data: todos})
  }).catch(err => {
    next({status: 500, message: 'server error', error: err})
  })
}
