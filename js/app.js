// const APIKEY =  `53e18847d94fd95d96f8426b17884ed2`
// const $searchitem=$("input").val()
const $button=$("button")
const restcountries=(choice)=> {
    $.ajax( 
     {
         url:`https://restcountries.com/v3.1/name/${choice}`
})
 .then((data)=>{
     console.log(data)
    
    $('#country_code').data(data[0].idd);
    $('#poplulation').data(data[0].population);
    $('#currencies').data(data[0].currencies)

})
}
//  .catch((error)=> { 
//      console.log(error)
//  })

// const $img = $("<img id='apod'>")

$button.on("click",()=>{
    const $searchitem = $("#search").val() 
      restcountries($searchitem) 

})
// restcountries($searchitem)

// `${data.data[0]}`,
//     `${data.data[0].idd}`,
//     `${data.data[0].countrycode}`,
//     `${data.data[0].population}`,
//     `${data.data[0].curriencies.Eur.name}`,
//     `${data.data[0].content[0]}`,
//     `${data.data[0].region}`,