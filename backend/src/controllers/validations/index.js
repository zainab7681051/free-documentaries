const Joi=require('joi')
module.exports={
	async register(req,res,next){
		try {
		  	const schema=Joi.object({
								name: Joi.string()
						        .alphanum()
						        .max(15)
						        .required(),
								
								email: Joi.string()
								.email()
								.required(),
			
								password: Joi.string()
						        .alphanum()
						        .min(5)
						        .max(15)
								.required()
							})
			
				const {error,value}=schema.validate(req.body) //validate body data against schema
		
				if(error){
				switch (error.details[0].type) {
					case 'string.alphanum':
						if(error.details[0].context.key==='name'){
							res.status(400).send({
					 			error:'Name must be alphanumerical'
					 		})
							break
						}
						else if(error.details[0].context.key==='password'){
							res.status(400).send({
					 			error:'Password must be alphanumerical'
							})
							break
						}
						
					case 'string.max':
						if(error.details[0].context.key==='name'){
							res.status(400).send({
					 			error:'Name must be at most 15 characters long'
					 		})
							break
						}
						else if(error.details[0].context.key==='password'){
							res.status(400).send({
					 			error:'Password must be at most 15 characters long'
							})
							break
						}
		
					case 'string.min':
						res.status(400).send({
				 			error:'Password must be at least 5 characters long'
				 		})
						break
				
					case 'string.email':
						res.status(400).send({
				 			error:'Must be valid e-mail'
						})
						break;
		
					case 'string.empty': //required()
						if(error.details[0].context.key==='name'){
							res.status(400).send({
					 			error:'Name is required'
					 		})
							break
						}
						else if(error.details[0].context.key==='email'){
							res.status(400).send({
					 			error:'E-mail is required'
							})
							break
						}
						else if(error.details[0].context.key==='password'){
							res.status(400).send({
					 			error:'Password is required'
							})
							break
						}
		
					default:
						res.status(400).send({
							error:'No empty or invalid forms'
						})
						break;
					}
				
				} else {
					next()
				}
		  } catch (e) {
		  	console.log(e)
		  	res.status(500).send({
				error:'An error has occured :('
			})
		}

	},

	async login(req,res,next){
	  try {
	  	const schema=Joi.object({
							name: Joi.string()
					        .required(),
		
							password: Joi.string()
							.required()
						})
		
				const {error,value}=schema.validate(req.body) //validate body data against schema
				if(error){
				switch (error.details[0].type) {
					case 'string.empty': //required()
						if(error.details[0].context.key==='name'){
							res.status(400).send({
					 			error:'Name or E-mail is required'
					 		})
							break
						}
						else if(error.details[0].context.key==='password'){
							res.status(400).send({
					 			error:'Password is required'
							})
							break
						}
		
					default:
						console.log(error.details)
						res.status(400).send({
							error:'No empty or invalid forms'
						})
						break;
					}
				
				} else {
					next()
				}
	  } catch (e) {
	  	console.log(e)
	  	res.status(500).send({
			error:'An error has occured :('
		})
	  }
  
	},

	async InList(req,res,next){
	  try {
	  	const schema=Joi.object({
							toDoText: Joi.string()
					        .required(),
		
							toDoDate: Joi.string()
							.required(),

						})
		
				const {error,value}=schema.validate(req.body) //validate body data against schema
				if(error){
				switch (error.details[0].type) {
					case 'string.empty': //required()
						if(error.details[0].context.key==='toDoText'){
							res.status(400).send({
					 			error:'Text input field is required'
					 		})
							break
						}
						else if(error.details[0].context.key==='toDoDate'){
							res.status(400).send({
					 			error:'Date input field is required'
							})
							break
						}
		
					default:
						console.log(error.details)
						res.status(400).send({
							error:'No empty or invalid fields'
						})
						break;
					}
				
				} else {
					next()
				}
	  } catch (e) {
	  	console.log(e)
	  	res.status(500).send({
			error:'An error has occured :('
		})
	  }
  
	},


	

}

/*
joi throws or returns ValidationError objects containing :

name - 'ValidationError'.
isJoi - true.
details - an array of errors :
message - string with a description of the error.
path - ordered array where each element is the accessor to the value where the error happened.
type - type of the error.
context - object providing context of the error containing:
key - key of the value that erred, equivalent to the last element of details.path.
label - label of the value that erred, or the key if any, or the default messages.root.
value - the value that failed validation.
other error specific properties as described for each error code.
annotate() - function that returns a string with an annotated version of the object pointing
 at the places where errors occurred. Takes an optional parameter that, if truthy, will strip the colors out of*/


 /*
 what error.details returns when error is in name field:
 [
  {
    message: '"name" length must be less than or equal to 15 characters long',
    path: [ 'name' ],
    type: 'string.max',
    context: {
      limit: 15,
      value: '22222222222222222222',
      encoding: undefined,
      label: 'name',
      key: 'name'
    }
  }
]
*/