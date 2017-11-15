const data = require('../../vagas.json')

module.exports = app => {

    const jobs = require('../controllers/jobs')(app)

    // console.log(Object.assign(obj, data))

    jobs.insertAutomatic(data.docs)
}