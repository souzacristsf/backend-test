module.exports = app => {
	const Return = require('./returnObject')
	return {
		createUser: (Model,res) => Model.save().then(object => Return.successCreateUser(object, res)),

		create: (Model,res) => Model.save().then(object => Return.success(object, res)),

		listAll: (Model, query, mod, res) => Model.paginate(query, mod)
		.then(object => Return.success(object, res)),

		listPaginate: (Model, query, options, res) => Model.paginate(query, options)
		.then(object => Return.success(object, res)),

		listOne: (Model, query, mod, res) => Model.findOne(query,mod)
		.then(object => Return.success(object, res)),

		listOnePopulate: (Model, query, options, res)=> Model.paginate(query, options)
		.then(object => Return.success(object, res)),

		listAllPopulate: (Model, query, options, res)=> Model.paginate(query, options)
		.then(object => Return.success(object, res)),

		update: (Model, query, mod, res) => Model.update(query, mod)
		.then(object => Return.returnUpdateSuccess(object, res)),

		findOneAndUpdate: (Model, query, mod, res, options)=> Model.findOneAndUpdate(query, mod, options)
		.then(object => Return.returnUpdateSuccess(object, res)),

		delete: (Model, query, opt, res) => Model.findByIdAndRemove(query, opt)
		.then(object => Return.success(object, res)),

		findByIdAndUpdate: (Model, query, options)=> Model.findByIdAndUpdate(query, options)
		.then(object => Return.success(object, res)),

		aggregateList: (Model, arr, res) => Model.aggregate(arr)
		.then(object => Return.success(object, res))
	}
}
