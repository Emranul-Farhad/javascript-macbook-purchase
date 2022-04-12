


// function declered //w

 function priceAndTap (click, price, show) {

    document.getElementById (click).addEventListener ("click", function (){
        const priceSection = document.getElementById(show);
         priceSection.innerText =  price ; 

         // price total section //

         const bestPrice = document.getElementById('best-price').innerText ;
      const memoryCost = document.getElementById('memory-cost').innerText ;
      const storageCost = document.getElementById('storage-cost').innerText;
      const deliveryCost = document.getElementById('delivery-cost').innerText ;

      const convertPrice = parseFloat (bestPrice) + parseFloat (memoryCost) +     parseFloat (storageCost) + parseFloat (deliveryCost)  ;


      const totalPriceShowSection = document.getElementById('total-price');
      const convert =  parseFloat  (totalPriceShowSection.innerText )
       totalPriceShowSection.innerText =   convertPrice ;
   

       })    

 }


//  all data add here //

priceAndTap ('sixteenGB', 59, 'memory-cost') ; 
//
priceAndTap ('eightGB', 0, 'memory-cost');
//
priceAndTap ('ssd1', 300, "storage-cost" );
//
priceAndTap ( 'ssd2', 500, "storage-cost");
//
priceAndTap ('ssd3', 1000, "storage-cost");
//
priceAndTap ("paid-delivery", 50, "delivery-cost")
//
priceAndTap ("free-delivery", 0, "delivery-cost");



// promo code function  // 


  
    
    // let code = "PROMO";
    // document.getElementById('apply-btn').addEventListener ("click", function (){
        
    //     const getInputSection = document.getElementById('promo-input').value ;
        
       
    //     if ( getInputSection === code ) {
    //         getInputSection.value= " ";

    //     let total = document.getElementById('total-price');
    //     let convert = parseFloat ( total.innerText);

    //     let offer = convert * .2 ;
    //     let offerPrice = convert - offer ; 

    //     total.innerText = offerPrice ;
       
    //     }

    //     else {
    //         alert('this is wrong') ;
        
    //     }
       

    // })


    var code = "PROMO"
    document.getElementById ("apply-btn").addEventListener ("click", function ( ) {

        const offerInput = document.getElementById ('promo-input')
       const getValue = offerInput.value ;

        if ( getValue === code ){

            const getTotal  = document.getElementById ('total-price');
            const convert = parseFloat (getTotal.innerText);

            const offer = convert *.2;
            const offerPrice = convert - offer ; 

            getTotal.innerText = offerPrice ; 

            offerInput.value= '';
        }


    })