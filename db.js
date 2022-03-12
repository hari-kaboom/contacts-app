const sequelize=require('sequelize')
const db=new sequelize('contactlist','contact_operator','1234',
{   host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,
    }
}
)
const contacts=db.define(
    'mycontacts',{
       
    name :{
        type:sequelize.STRING,
        allowNull:false

    },
    PhNo :{ type:sequelize.STRING, primaryKey:true},
    Email:{
        type:sequelize.STRING,
        allowNull:true
    }
    
}
);
const allusers=db.define('users',
{
Email:{ type:sequelize.STRING,primaryKey:true},
Password:{type:sequelize.STRING,allowNull:false},
Secret:{type:sequelize.STRING,allowNull:false}


})

db.sync()
.then(()=>console.log('synced'))
.catch((err)=>console.log(err))
exports=module.exports={
   contacts,allusers
}
