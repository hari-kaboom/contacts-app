const routes=require('express').Router()
const users_table=require('../../db').allusers
routes.get('/',(req,res)=>{
    users_table.findAll()
                .then((products)=>{
                    res.status(200).send(products)
                })
                .catch((err)=>{
                    error:'not able to retrieve products'
                })

})
routes.post('/',(req,res)=>{
    
    users_table.create(
        {
            
            Email:req.body.email,
            Password:req.body.password,
            Secret:req.body.secret
        }
    )
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).send({
            error:'not add products'
        })
    })
})
//routes.post()



 

exports=module.exports=routes