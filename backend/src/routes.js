const AuethController=require('./controllers/authentication.js')
const isUserAuethController=require('./controllers/isUserAuthenticated.js')
const ValidController=require('./controllers/validations')
const docsController=require('./controllers/docsControllers.js')

module.exports=(app)=>{
	/*USERS*/
	app.get('/docs',
		docsController.getAll)

	app.get('/docs/:id',
		docsController.getAllFromGenre)

	/*ADMIN*/
	app.post('/admin/register',
		ValidController.register,
		AuethController.register)

	app.post('/admin/login',
		ValidController.login,
		AuethController.login)

	app.post('/admin/docs',
		isUserAuethController,
		//ValidController.docs,
		docsController.create)

	app.get('/admin/docs',
		isUserAuethController,
		docsController.getAll)

	app.get('/admin/genres',
		isUserAuethController,
		docsController.getGenres)

	app.post('/admin/docs-genres',
		isUserAuethController,
		docsController.createAssociation)

	app.delete('/admin/docs-genres/:id',
		isUserAuethController,
		docsController.deleteAssociation)

	app.delete('/admin/docs/:id',
		isUserAuethController,
		docsController.deleteById)

	app.delete('/admin/docs',
		isUserAuethController,
		docsController.deleteAll)

	app.put('/admin/docs/:id',
		isUserAuethController,
		docsController.update)
}
