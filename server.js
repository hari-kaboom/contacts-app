
const express = require('express')
const { urlencoded } = require('express')
const server=require('express')
const contacts_app=server()
const path=require('path')

contacts_app.use(server.json())
contacts_app.use(server.urlencoded({extended:true}))
const port=5757
contacts_app.use('/register' ,server.static(path.join(__dirname,'views')))
allusers=require('./db').allusers
contacts_app.use('/' ,server.static(path.join(__dirname,'public')))
contacts_app.use('/api' ,require('./routes/api').routes)
contacts_app.post('/login',async (req,res)=>{const user = await allusers.findOne({
    attributes: ['Email', 'Password', 'Secret'],
    where: {
      Email: req.body.email,
      Password:req.body.password
    }
  }).then((users)=>{
      
      console.log(users)
   if(users===null){
        res.send('you dont have account please register')
      }
      else{
     
     res.redirect('/api/mycontacts')
     
      }
     
  })
  .catch((err)=>{
      res.send(err)
  })



})
contacts_app.listen(port,()=>{
    console.log('contacts_app started')
})
