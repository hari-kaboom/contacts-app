
$ (function (){

    let product_list=$("#product-list")
    
    
      fetch_products((products)=>{
          product_list.empty()
          for (product of products){
              product_list.append(create_card(product))
             
          }


         
      })

})
