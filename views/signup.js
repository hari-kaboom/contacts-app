function addusers(name,manu,price,done){
    console.log('hihihgi') 
    //console.log(name,manu,price)
    $.post('/api/register',
    {email:name,password:manu,secret:price},
    function(data){
        done(data)
    })
}