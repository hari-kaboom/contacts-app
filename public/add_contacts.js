$(function(){
    let productname=$('#productname')
    let productmanufacturer=$('#productmanufacturer')
    let productprice=$('#productprice')
    
    $('#btnproductadd').click(function(){
        console.log(productmanufacturer.val(),productname.val())
        //window.alert('Added'+'addtodatabase')
        addproduct(
            productname.val(),
            productmanufacturer.val(),
            productprice.val(),
            function(addedproduct){
                window.alert('Added'+addedproduct+'addtodatabase')
            }
        )
    })
})