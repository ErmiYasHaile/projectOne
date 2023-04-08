
const $button=$("button")
const restcountries=(choice)=> {
    $.ajax( 
     {
         url:`https://restcountries.com/v3.1/name/${choice}`
})
 .then((data)=>{
     console.log(data)
    console.log(data[0].flags.png)
     $('#capital').text(data[0].capital);
    $('#country_code').text(`${data[0].idd.root}`); 
    $('#population').text(`${data[0].population}`);
    $('#currencies').text(Object.keys(data[0].currencies)[0]); 
    $('#region').text(data[0].region); 
    
    $("img").attr("src",data[0].flags.png)
    $("#country-info").show();
    
})
}

$button.on("click",()=>{
    const $searchitem = $("#search").val() 
      restcountries($searchitem) 
})
.catch((error)=> {
    console.log(error);
})