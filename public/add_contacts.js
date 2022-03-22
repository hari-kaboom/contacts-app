$(function(){
    let name=$('#name')
    let phno=$('#phno')
    let email=$('#email')
    
    $('#btnproductadd').click(function(){
        //console.log(productmanufacturer.val(),productname.val())
        //window.alert('Added'+'addtodatabase')
        addproduct(
            name.val(),
            phno.val(),
            email.val(),
            function(addedproduct){
                window.alert('Added'+addedproduct+'addtodatabase')
            }
        )
    })
})
