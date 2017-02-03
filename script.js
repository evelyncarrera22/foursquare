// JavaScript File
$(document).ready(function(){
    $("#submit").click(function(){
    var url= "https://api.foursquare.com/v2/venues/search"
    var client= "?client_id=ZOZ1G22RIT34G0O1XFC22U1XS4NQCGKVP3O5L3XSSU5WRZ2H"
    var secret= "&client_secret=42FJWS4ECJ1Q4QIYJ1BKWOYTOUF2S4UCGVZ30XQKJHGEUZUX"
    var v=  "&v=20130815"
    var l= "&ll=40.7,-74"
    var query= "&query=sushi"
    var fullUrl= url + client + secret + v + l + query
        $.getJSON(fullUrl, function(response){
        console.log(response)
        });    
    });
});