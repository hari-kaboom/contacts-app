$(function(){
    $('#signin').click(function(){
        $.get('/api/mycontacts',function(data){
            console.log(data)
            
        })

    })
        
}) 