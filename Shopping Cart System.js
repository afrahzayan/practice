let my={
    name:"soap",
    price:45,
    quantity:2
};

function abc(aaa) {
    let discout=0
    let after=0
    let total=my.price*my.quantity;

    if( total>500){

        discout=total*10/100;
        after=total-discout
        
   }else{
       after=total-=discout
   }

    console.log(`Total before discount: ${total}`);
    console.log(`Discount applied:${discout}`);
    console.log(`Payable: ${after}`);
    
    
}abc(my)