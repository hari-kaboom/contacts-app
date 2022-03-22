function fetch_products(done){
    $.get('/api/mycontacts',function(data){
        console.log(data)
        done(data)
    })
}
function addproduct(name,phno,email,done){
    console.log('hihihgi') 
    //console.log(name,manu,price)
    $.post('/api/mycontacts',
    {name:name,Phno:phno,email:email},
    function(data){
        done(data)
    })
}
function create_card(products){
    return $(`<table class="table">
    <tbody>
      <tr>
        <td>${products.name}</td>
        <td>${products.PhNo}</td>
        <td>${products.Email}</td>
      </tr>
    </tbody>
  </table>
`)
}
