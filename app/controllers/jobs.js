module.exports = app => {

	// const Jobs = app.models.jobs
	// const Help = app.helps.crud
	
	// const searchJobs = text => { 
		
		// 	const checkCondition = item => item.title.toLowerCase().indexOf( text ) >-1;
		
		// 	return data.filter(checkCondition);
		// }
	const data = require('../../vagas.json').docs

	const filter = (data, text, field = "title") => {
		
		if(field === "cidade"){
			return data.filter( item => item[field].includes( text ) )
		}
		else {			
			return data.filter( item => item[field].toLowerCase().indexOf( text ) >-1 )
		}
	}

	return {

		listAll: ( req, res )=>{ 

			var result = {}

			if(req.query["title"]){
				result = filter( data, req.query.title.toLowerCase(), "title" )
				res.status(200).json({success: true, data: result})
			}
			else if(req.query["description"]) {
				result = filter( data, req.query.description.toLowerCase(), "description" )
				res.status(200).json({success: true, data: result})
			}
			else if (req.query["cidade"]){
				result = filter( data, req.query.cidade, "cidade" )
				res.status(200).json({success: true, data: result})
			}
		},

		// listAll: (req,res)=>{
			
		// 	// const query = {
		// 	// 	$text: {
		// 	// 		$search: req.body.text
		// 	// 	}
		// 	// }

		// 	// const mod = {
		// 	// 	page: 1,
		// 	// 	limit: 10,
		// 	// 	select: ''
		// 	// }

		// 	// Help.listAll(Jobs, query, mod, res)
		// },

		insertAutomatic: ( data ) => {

			// const jobs = new Jobs();
			// Jobs.find().count()
			// .then( result => {
			// 	if(result == 1200){
			// 		// console.log(result)
			// 		return;
			// 	} else {
			// 		console.log('oi')
			// 		Jobs.insertMany(data)
			// 			.then( result => console.log({sucess: 'dados inserido com sucesso!!! :)'}))
			// 			.catch( err => console.log(err));        
			// 	}
			// })
		}
	}

}
