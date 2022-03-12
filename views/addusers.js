$(function(){
    let email=$('#email')
    let password=$('#password')
    let secret=$('#secret')
    
    $('#signup').click(function(){
        console.log(email.val(),secret.val())
        //window.alert('Added'+'addtodatabase')
        addusers(
            email.val(),
            password.val(),
            secret.val(),
            function(addedproduct){
                window.alert('Added'+addedproduct+'addtodatabase')
            }
        )
    })
})