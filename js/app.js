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
    // `${data.data[0]}`,
    // `${data.data[0].idd}`,
    // `${data.data[0].countrycode}`,
    // `${data.data[0].population}`,
    // `${data.data[0].curriencies.Eur.name}`,
    // `${data.data[0].content[0]}`,
    // `${data.data[0].region}`,
})
}
//  .catch((error)=> { 
//      console.log(error)
//  })

$button.on("click",()=>{
    const $searchitem = $("#search").val() 
      restcountries($searchitem) 

})
// restcountries($searchitem)
