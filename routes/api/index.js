const routes=require('express').Router()
routes.use('/mycontacts',require('./mycontact'))
routes.use('/register',require('./users'))
//routes.use('/login',)
exports=module.exports={
                        routes
                    }