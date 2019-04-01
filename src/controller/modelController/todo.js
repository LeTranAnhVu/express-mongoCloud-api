import Todo from '../../model/todo'

export default {
  getAll: function () {
    return new Promise((resolve, reject) => {
      Todo.find({}, (err, todos) => {
        err ? reject(err) : resolve(todos)
      })
    })
  },
  getOneById: function (id) {
    return new Promise((resolve, reject) => {
      Todo.findById(id, (err, todo) => {
        err ? reject(err) : resolve(todo)
      })
    })
  },
  create: function (data) {
    return new Promise((resolve, reject) => {
      let todo = new Todo(data)
      todo.save((err, todo) => { err ? reject(err) : resolve(todo)})
    })
  },
  edit: function (id, data) {
    const opt = {
      new: true, // return the new updated data instead of the old one in
                 // callback
      useFindAndModify: false,
    }
    return new Promise((resolve, reject) => {
      if (id && data) {
        data.dateUpdated = Date.now()
        Todo.findOneAndUpdate({_id: id}, data, opt, (err, updatedData) => {
          err ? reject(err) : resolve(updatedData)
        })
      } else {
        reject({message: 'invalid id or data'})
      }
    })
  },
  /*
  * @params: ids: array of id
  * */
  delete: function (ids) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(ids) && ids.length != 0) {
        Todo.deleteMany({_id: {$in: ids}}, function (err, result) {
          if (err) {
            reject(err)
          } else {
            if (result.n > 0) {
              // delete successfully
              resolve()
            } else {
              // nothing to delete
              reject({err: 'invalid ids'})
            }
          }
        })
      } else {
        reject({err: 'invalid ids'})
      }

    })
  },
}
