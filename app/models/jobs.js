const string = {type: String}
const boolean = {type: Boolean, default: false}
const date_default = {type: Date, default: Date.now}
const number = {type: Number}
const arrayString = { type: [String], index: true }

module.exports = app =>{
	const mongoose = require('mongoose')
	const mongoosePaginate = require('mongoose-paginate')
	const Schema = mongoose.Schema
	const ObjectId = mongoose.Schema.Types.ObjectId

	const jobs = new Schema({
		title : string,
		description: string, 
		salario: number,
		cidade: arrayString,
		cidadeFormated: arrayString,
		created_at: date_default,
		updated_at: {type: Date},
		deleted_at: {type: Date}
	})

	jobs.index({ title: 'text' }, { weights: {title: 1, description: 2 }});
	jobs.plugin(mongoosePaginate)

	return mongoose.model('Jobs', jobs)

}

