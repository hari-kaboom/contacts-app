const routes=require('express').Router()
const contact_table=require('../../db').contacts
const users_table=require('../../db').allusers

routes.get('/',(req,res)=>{
    contact_table.findAll()
                .then((products)=>{
                    res.status(200).send(products)
                })
                .catch((err)=>{
                    error:'not able to retrieve products'
                })

})
routes.post('/',(req,res)=>{
    
    contact_table.create(
        {
            name:req.body.name,
            PhNo:req.body.Phno,
            Email:req.body.email
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




 

exports=module.exports=routes