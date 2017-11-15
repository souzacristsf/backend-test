module.exports = app => {
  const url = '/api/v1/jobs'
	const Controller = app.controllers.jobs

  app.route(url)
		.get(Controller.listAll)
}

