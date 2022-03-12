



$(function(){
    let email=$('#email')
    let password=$('#password')
   
    
    $('#signin').click(function(){
        console.log(email.val(),password.val())
        //window.alert('Added'+'addtodatabase')
       verifyUser(
            email.val(),
            password.val()
    
           
        )
        
    })
})